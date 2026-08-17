#!/usr/bin/env node
/**
 * Image Optimization Script for NoxusDynamicsWeb
 * Converts images to WebP and AVIF formats for better performance
 * Run with: node scripts/optimize-images.js
 */

import { createReadStream, createWriteStream, readdirSync, statSync, existsSync, mkdirSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import sharp from 'sharp';

const IMAGES_DIR = 'public';
const QUALITY = 80;
const WIDTHS = [400, 800, 1200, 1600]; // Responsive widths

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(inputPath: string, outputDir: string) {
  const ext = extname(inputPath).toLowerCase();
  const name = basename(inputPath, ext);
  const relativePath = inputPath.replace(IMAGES_DIR + '/', '').replace(ext, '');

  const outputFormats = [
    { format: 'webp', options: { quality: QUALITY, effort: 6 } },
    { format: 'avif', options: { quality: QUALITY - 10, effort: 8 } },
  ];

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    for (const { format, options } of outputFormats) {
      // Generate responsive sizes
      for (const width of WIDTHS) {
        if (width >= (metadata.width || width)) continue; // Don't upscale

        const outputPath = join(outputDir, `${relativePath}-${width}w.${format}`);
        mkdirSync(dirname(outputPath), { recursive: true });

        await image
          .clone()
          .resize(width, null, { withoutEnlargement: true })
          [format](options)
          .toFile(outputPath);
      }

      // Original size
      const outputPath = join(outputDir, `${relativePath}.${format}`);
      mkdirSync(dirname(outputPath), { recursive: true });

      await image
        .clone()
        [format](options)
        .toFile(outputPath);
    }

    console.log(`✓ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error);
  }
}

function findImages(dir: string): string[] {
  const files: string[] = [];

  function traverse(currentDir: string) {
    const entries = readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);

      if (entry.isDirectory()) {
        traverse(fullPath);
      } else if (imageExtensions.includes(extname(entry.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

async function main() {
  console.log('🔍 Finding images to optimize...');
  const images = findImages(IMAGES_DIR);
  console.log(`📸 Found ${images.length} images`);

  if (images.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log('⚡ Optimizing images...');

  for (const image of images) {
    await optimizeImage(image, IMAGES_DIR);
  }

  console.log('✅ Image optimization complete!');
}

main().catch(console.error);