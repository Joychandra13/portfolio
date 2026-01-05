import React from 'react'

const Input = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  error,
  helperText,
  ...props 
}) => {
  const inputClasses = `input input-bordered w-full focus:scale-105 transition-transform duration-200 ${error ? 'input-error' : ''} ${className}`
  
  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        value={value}
        onChange={onChange}
        {...props}
      />
      {(error || helperText) && (
        <label className="label">
          <span className={`label-text-alt ${error ? 'text-error' : ''}`}>
            {error || helperText}
          </span>
        </label>
      )}
    </div>
  )
}

const Textarea = ({ 
  label,
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  rows = 4,
  className = '',
  error,
  helperText,
  ...props 
}) => {
  const textareaClasses = `textarea textarea-bordered w-full resize-y focus:scale-105 transition-transform duration-200 ${error ? 'textarea-error' : ''} ${className}`
  
  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={textareaClasses}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        {...props}
      />
      {(error || helperText) && (
        <label className="label">
          <span className={`label-text-alt ${error ? 'text-error' : ''}`}>
            {error || helperText}
          </span>
        </label>
      )}
    </div>
  )
}

const Select = ({ 
  label,
  options = [],
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  error,
  helperText,
  placeholder = 'Select an option',
  ...props 
}) => {
  const selectClasses = `select select-bordered w-full focus:scale-105 transition-transform duration-200 ${error ? 'select-error' : ''} ${className}`
  
  return (
    <div className="form-control">
      {label && (
        <label className="label" htmlFor={id}>
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        id={id}
        name={name}
        className={selectClasses}
        required={required}
        value={value}
        onChange={onChange}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {(error || helperText) && (
        <label className="label">
          <span className={`label-text-alt ${error ? 'text-error' : ''}`}>
            {error || helperText}
          </span>
        </label>
      )}
    </div>
  )
}

Input.Textarea = Textarea
Input.Select = Select

export default Input