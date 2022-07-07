import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import VerCliente from './paginas/VerCliente'

function App() {
    return (
        <div>
            {/*BrowserRouter indica que se van a estar usando rutas
             y es lo que las esta verificando.
             
             Dentro de Routes Van a estar las rutas
             
             Las Route con etiqueta de apertura y cierre indican que contienen rutas anidadas
             y las Route con solo cierre indican una ruta individual
             
             El atributo index indica cual es el componente default que se va a cargar en el
             outlet de la ruta padre
             
             Para anidar mas componentes con nuevas rutas se le agregan a las rutas hijas 
             la propiedad path y eso se va a cargar en el outlet del componente padre.

             Escribiendo :x (x=cualquier nombre) despues de un path indica que el path puede ser
             varible*/}

            <BrowserRouter>
                <Routes>
                    <Route path="/clientes" element={<Layout/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path="nuevo" element={<NuevoCliente/>}/>
                        <Route path="editar/:id" element={<EditarCliente/>}/>
                        <Route path=":id" element={<VerCliente/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
