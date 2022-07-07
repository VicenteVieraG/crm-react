import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente}) => {
    const {nombre, empresa, email, telefono, notas, id} = cliente;

    const navigate = useNavigate();

    return (
        <tr className="transition ease-in-out duration-200 border-b hover:bg-gray-50">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">E-mail:</span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Tel:</span>{telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td className="p-3">
                <button
                    type="button"
                    className="transition ease-in-out duration-200 bg-yellow-500 text-white font-bold uppercase text-xs block w-full p-2 hover:bg-yellow-600"
                    onClick={() => navigate(`/clientes/${id}`)}
                    >Ver
                </button>
                <button
                    type="button"
                    className="transition ease-in-out duration-200 bg-blue-600 text-white font-bold uppercase text-xs block w-full p-2 mt-3 hover:bg-blue-700"
                    >Editar
                </button>
                <button
                    type="button"
                    className="transition ease-in-out duration-200 bg-red-600 text-white font-bold uppercase text-xs block w-full p-2 mt-3 hover:bg-red-700"
                    >Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente