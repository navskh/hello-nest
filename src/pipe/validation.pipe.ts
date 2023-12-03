import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

/**
 * A validation pipe that implements the PipeTransform interface.
 * This pipe is used to transform the input value based on the provided metadata.
 */
@Injectable()
export class ValidationPipe implements PipeTransform {
  /**
   * Transforms the input value based on the provided metadata.
   * @param value - The value to be transformed.
   * @param metadata - The metadata about the value.
   * @returns The transformed value.
   */
  //
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}

// Path: hello-nest/src/main.ts
