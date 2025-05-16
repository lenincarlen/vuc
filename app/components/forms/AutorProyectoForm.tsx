"use client"
import React, { useState } from "react";
import { Input } from "@heroui/input";

interface AutorProyectoFormProps {
  onSubmit: (data: any) => void;
}

export default function AutorProyectoForm({ onSubmit }: AutorProyectoFormProps) {
  const [autorData, setAutorData] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    nacionalidad: "",
    profesion: "",
    exequatur: "",
    celular: "",
    ciudad: "",
    direccion: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAutorData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(autorData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
 
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
         
         <Input
                label="Cedula"
                type="number"
                id="celular"
                name="celular"
               
              
               
              />
        </div>
        <div>
        
          <Input
                label="Nombrer"
                type="text"
                id="name"
                name="name"
              
                isRequired
              />
        </div>
        <div>
         
          
          <Input
                label="apellido"
                type="text"
                id="lastname"
                name="lasname"
              
                isRequired
              />
        </div>
        <div>
          
           
          <Input
                label="Nacionalidad"
                type="text"
                id="nacionalidad"
                name="nacionalidad"
              
                isRequired
              />
        </div>
        <div>
        
          <Input
                label="Profesion"
                type="text"
                id="profesion"
                name="profesion"
              
                isRequired
              />
        </div>
        <div>
      
         <Input
                label="Exequátur/ Nº de Colegiatura"
                type="number"
                id="exequátur"
                name="exequátur"
                placeholder="0000"
               
              />
        </div>
        <div>
       
              <Input
                label="Celular"
                type="number"
                id="cedula"
                name="cedula"
              
              
              />
        </div>
        <div>
      
           <Input
                label="Cuidad"
                type="text"
                id="ciudad"
                name="ciudad"
              
                isRequired
              />
        </div>
        <div>
        
          <Input
                label=" Dirección"
                type="text"
                id="direccion"
                name="direccion"
              
                isRequired
              />
        </div>
        <div>
        
          <Input
          label="Email"
            type="email"
            id="email"
            name="email"
          isRequired
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
       
      </div>
    </form>
  );
}