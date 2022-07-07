import React from 'react'
import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"

const VerCliente = () => {
    const {id} = useParams();

    const [cliente, setCliente] = useState({});

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`;

                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setCliente(resultado);
            } catch (error) {
                console.log(error);
            }
        }

        obtenerClienteAPI();
    }, []);
    
  return (
    <div>
        <h1 className="font-black text-4xl text-blue-900">Ver cliente: {cliente.nombre}</h1>
        <p className="mt-3">Informacion del cliente</p>
        
        <p className="text-gray-600 text-2xl mt-10">
            <span className="text-gray-800 font-bold uppercase">Cliente:</span>
            {cliente.nombre}
        </p>
        <p className="text-gray-600 text-2xl mt-4">
            <span className="text-gray-800 font-bold uppercase">Email:</span>
            {cliente.email}
        </p>
        {cliente.telefono && (
            <p className="text-gray-600 text-2xl mt-4">
                <span className="text-gray-800 font-bold uppercase">Telefono:</span>
                {cliente.telefono}
            </p>
        )}
        <p className="text-gray-600 text-2xl mt-4">
            <span className="text-gray-800 font-bold uppercase">Empresa:</span>
            {cliente.empresa}
        </p>
        {cliente.notas && (
            <p className="text-gray-600 text-2xl mt-4">
                <span className="text-gray-800 font-bold uppercase">Notas:</span>
                {cliente.notas}
            </p>
        )}
        
    </div>
  )
}

export default VerCliente