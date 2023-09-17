import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarPassword, validarEmail } from "./validaciones";

const DatosUsuario = () => {
  const [email, setEmail] = useState({ value: '', valid: null });
  const [password, setPassword] = useState({ value: '', valid: null });

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        if (email.valid && password.valid) {
          console.log('Siguiente formulario');
          console.log(email, password);
        } else {
          console.log('Verifica los datos ingresados');
        }
        e.preventDefault();
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid == false}
        helperText={email.valid == false && "Ingresa un correo electrónico válido."}
        value={email.value}
        onChange={(e) => {
          const email = e.target.value;
          const validador = validarEmail(email)
          setEmail({ value: email, valid: validador })
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid == false}
        helperText={password.valid == false && "Ingresa una contraseña válida."}
        value={password.value}
        onChange={(e) => {
          const password = e.target.value;

          setPassword({ value: password, valid: validarPassword(password) })
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
