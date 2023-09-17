import React from 'react'

export const validarEmail = (email) => {
    const length = email.length
    if (email.includes('@') && length > 5) {
        return true;
    } else {
        return false;
    }



}


export const validarPassword = (password) => {
    const length = password.length
    if (length >= 6 && length < 20) {
        return true;
    } else {
        return false;
    }
}
