import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom'
//Link es el componente con el que modificas la direccion de la barra de navegacion del navegador. 
//En el atributo "to" selecciones la direccion que dentra la barra de navegacion.

const Layout = () => {
	const location = useLocation();
	const URLActual = location.pathname;

	return (
		<div className="md:flex md:min-h-screen">
			{/*Nav bar */}
			<div className="md:w-1/4 bg-blue-900 px-5 py-10">
				<h2 className="text-4xl font-black text-center text-white">CRK - Clientes</h2>
				<nav className="mt-10">
					<Link 
						className={`${URLActual === "/clientes" ? "text-blue-300" : "text-white"} transition delay-75 duration-200 text-2xl block mt-2 hover:text-blue-300`}
						to="/clientes"
						>Clientes
					</Link>
					<Link 
						className={`${URLActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"} transition delay-75 duration-200 text-2xl block mt-2 hover:text-blue-300`}
						to="/clientes/nuevo"
						>Nuevo Cliente
					</Link>
				</nav>	
			</div>

			<div className="md:w-3/4 p-10">				
				<Outlet/>
			</div>
			
		</div>
	)
}

export default Layout