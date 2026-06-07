import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('src/assets');

async function convertPngToWebp() {
  try {
    const files = fs.readdirSync(assetsDir);
    const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));
    
    console.log(`Found ${pngFiles.length} PNG files in ${assetsDir}. Starting conversion...`);
    
    for (const file of pngFiles) {
      const inputPath = path.join(assetsDir, file);
      const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const outputPath = path.join(assetsDir, outputName);
      
      console.log(`Converting ${file} -> ${outputName}...`);
      
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
        
      console.log(`Successfully converted ${file}.`);
      
      // Delete the original PNG file to save space and clean up
      fs.unlinkSync(inputPath);
      console.log(`Deleted original PNG: ${file}`);
    }
    
    console.log('All conversions completed successfully!');
  } catch (error) {
    console.error('Error during image conversion:', error);
    process.exit(1);
  }
}

convertPngToWebp();
