import React, { useState,useEffect } from "react";
import axios from "axios";


const baseURL="http://localhost:3000/usuarios/registrar"

export const Formulario=()=>{
const[postUsuarios,setPostUsuarios]=useState({
    identificacion: '',
    telefono: '',
    nombre: '',
    correo_electronico: '',
    tipo_usuario: '',
    estado: ''
})
useEffect(()=>{
    axios.post(baseURL).then((response)=>{
        console.log(response)
        setPostUsuarios(response.data)
    });
},[])
if(!postUsuarios)return null

    return(
        <div>
            <h1>hola</h1>
            <form action="" >
            <input type="text" name="identificacion" placeholder="identificacion" value={postUsuarios.identificacion} /><br />
            <input type="text" name="telefono" placeholder="telefono"value={postUsuarios.telefono} /><br/>
            <input type="text" name="nombre"placeholder="nombre" value={postUsuarios.nombre} /><br/>
            <input type="text" name="correo_electronico"placeholder="correo_electronico" value={postUsuarios.correo_electronico} /><br />
            <input type="text" name="tipo_usuario"placeholder="tipo_usuario" value={postUsuarios.tipo_usuario}/><br />
            <input type="text" name="estado"placeholder="estado" value={postUsuarios.estado} /><br />
            <button type="submit">Registrar Cliente</button>
            </form>
        </div>
    )
}