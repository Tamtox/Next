import {z} from 'zod';

// String validator ----------------------------------------------------------------------------------------------
interface IZodStringValidator {
  field_name: string
  options?: {
    min_length?: number
    max_length?: number
    type?: 'email' | 'uuid' | 'cuid' | 'cuid2' | 'ulid' | 'datetime' | 'url' | 'emoji' | 'ip'
  }
} 

export const createStringValidator = (validator: IZodStringValidator) => {
  const {field_name, options} = validator;
  const schema = z.string({
    required_error: `${field_name} is required`,
    invalid_type_error: `${field_name} must be a string`,
  });
  if (options?.type) {
    switch (options?.type) {
      case 'email':
        schema.email(`${field_name} must be a valid email`);
        break;
      case 'uuid':
        schema.uuid(`${field_name} must be a valid uuid`);
        break;
      case 'cuid':
        schema.cuid(`${field_name} must be a valid cuid`);
        break;
      case 'cuid2':
        schema.cuid2(`${field_name} must be a valid cuid2`);
        break;
      case 'ulid':
        schema.ulid(`${field_name} must be a valid ulid`);
        break;
      case 'datetime':
        schema.datetime(`${field_name} must be a valid datetime`);
        break;
      case 'url':
        schema.url(`${field_name} must be a valid url`);
        break;
      case 'emoji':
        schema.emoji(`${field_name} must be a valid emoji`);
        break;
      case 'ip':
        schema.ip(`${field_name} must be a valid ip`);
        break;
      default:
        break;
    }
  }
  if (options?.min_length) {
    schema.min(options?.min_length, `${field_name} must be at least ${options?.min_length} characters long`);
  }
  if (options?.max_length) {
    schema.max(options?.max_length, `${field_name} must be at most ${options?.max_length} characters long`);
  }
  return schema;
}

// Number validator ----------------------------------------------------------------------------------------------
interface IZodNumberValidator {
  field_name: string
  options?: {
    min?: number
    max?: number
    positive?: boolean
    negative?: boolean
    safe?: boolean
  }
}

export const createNumberValidator = (validator: IZodNumberValidator) => {
  const {field_name, options} = validator;
  const schema = z.number({
    required_error: `${field_name} is required`,
    invalid_type_error: `${field_name} must be a number`,
  });
  if (options?.min) {
    schema.min(options?.min, `${field_name} must be at least ${options?.min}`);
  }
  if (options?.max) {
    schema.max(options?.max, `${field_name} must be at most ${options?.max}`);
  }
  if (options?.positive) {
    schema.positive(`${field_name} must be a positive number`);
  }
  if (options?.negative) {
    schema.negative(`${field_name} must be a negative number`);
  }
  if (options?.safe) {
    schema.safe(`${field_name} must be a safe number`);
  }
  return schema;
}

interface IZodbigintValidator {
  field_name: string
  options?: {
    min?: bigint
    max?: bigint
    positive?: boolean
    negative?: boolean
  }
}

export const createBigIntValidator = (validator: IZodbigintValidator) => {
  const {field_name, options} = validator;
  const schema = z.bigint({
    required_error: `${field_name} is required`,
    invalid_type_error: `${field_name} must be a bigint`,
  });
  if (options?.min) {
    schema.min(options?.min, `${field_name} must be at least ${options?.min}`);
  }
  if (options?.max) {
    schema.max(options?.max, `${field_name} must be at most ${options?.max}`);
  }
  if (options?.positive) {
    schema.positive(`${field_name} must be a positive bigint`);
  }
  if (options?.negative) {
    schema.negative(`${field_name} must be a negative bigint`);
  }
  return schema;
}

// Boolean validator -------------------------------------------------------------------------------------------------
interface IZodBooleanValidator {
  field_name: string
}

export const createBooleanValidator = (validator: IZodBooleanValidator) => {
  const {field_name} = validator;
  const schema = z.boolean({
    required_error: `${field_name} is required`,
    invalid_type_error: `${field_name} must be a boolean`,
  });
  return schema;
}

// Date validator -----------------------------------------------------------------------------------------------------
interface IZodDateValidator {
  field_name: string
}

export const createDateValidator = (validator: IZodDateValidator) => {
  const {field_name} = validator;
  const schema = z.date({
    required_error: `${field_name} is required`,
    invalid_type_error: `${field_name} must be a valid date`,
  });
  return schema;
}

// Array validator ----------------------------------------------------------------------------------------------------


// Enum custom error message validator --------------------------------------------------------------------------------