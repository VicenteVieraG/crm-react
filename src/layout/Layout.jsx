import React from 'react'
import {Outlet} from 'react-router-dom'

const Layout = () => {
	return (
		<div className="md:flex md:min-h-screen">
			<div className="md:w-1/4 bg-blue-900 px-5 py-10">
				<h2 className="text-4xl font-black text-center text-white">CRK - Clientes</h2>
				<nav className="mt-10">
					<a 
						className="text-white text-2xl block mt-2 hover:text-blue-300"
						href="/clientes"
						>Clientes
					</a>
					<a href="/clientes/nuevo">Nuevo Cliente</a>
				</nav>
				1
			</div>
			<div className="md:w-3/4 bg-blue-900 px-5 py-10">				
				<Outlet/>
			</div>
			
		</div>
	)
}

export default Layout