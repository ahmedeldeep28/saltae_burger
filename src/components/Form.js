import React from 'react'
import { Form } from 'react-bootstrap'

export function FormInput({ propsForm, label, name, ...rest }) {
    let { getFieldProps, errors, touched } = propsForm
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                {...getFieldProps(name)}
                isInvalid={errors[name] && touched[name]}
                isValid={!errors[name] && touched[name]}
                {...rest}
            />

            <Form.Control.Feedback type="invalid">
                {errors[name]}
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export function FormSelect({ propsForm, label, name, children, ...rest }) {
    let { getFieldProps, errors, touched } = propsForm
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Select
                {...getFieldProps(name)}
                isInvalid={errors[name] && touched[name]}
                isValid={!errors[name] && touched[name]}
                {...rest}
            >
                {children}
            </Form.Select>

            <Form.Control.Feedback type="invalid">
                {errors[name]}
            </Form.Control.Feedback>
        </Form.Group>
    )
}