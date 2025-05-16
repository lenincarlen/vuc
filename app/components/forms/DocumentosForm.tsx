"use client"
import React, { useState } from "react";
import { Progress } from "@heroui/progress";
import { motion, AnimatePresence } from "framer-motion";

interface DocumentosFormProps {
  onSubmit: (data: any) => void;
}

export default function DocumentosForm({ onSubmit }: DocumentosFormProps) {
  const documentosRequeridos = [
   "Título(s) de propiedad",
"Plano de Mensura Catastral",
"Certificado de Uso de suelo y No Objeción al Proyecto",
"Tarjeta del Codia Arquitecto",
"Fotos estado actual del terreno",
"Planos arquitéctonicos sellados por ayuntamiento y MITUR (si aplica)",
"Planos Estructurales",
"Planos Hidrosanitarios",
"Planos de Instalaciones Eléctricas",
"Informe de Estudio Geotécnico",
"Memoria de cálculos estructurales",
"Modelo computacional",
"Memoria de cálculos hidrosanitarios",
"Informe Levantamiento estructural",
"Planos diseño vial",
"Informe diseño de pavimento",
"Autorización Ambiental",
"No Objeción de Turismo",
"Certificaciones y Resolución de Industria y Comercio",
"No Objeción de la Defensa Civil",
"No Objeción del Cuerpo de Bomberos",
"Certificaciones y Avalúo del Ministerio de Hacienda",
"Aprobación del Ministerio de Salud Pública",
"Otros"

  ];
  const [documentos, setDocumentos] = useState<File[]>([]);
  const [documentosNombres, setDocumentosNombres] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setDocumentos(prev => {
        const nuevos = [...prev];
        nuevos[currentIndex] = file;
        return nuevos;
      });
      setDocumentosNombres(prev => {
        const nuevos = [...prev];
        nuevos[currentIndex] = file.name;
        return nuevos;
      });
      if (currentIndex < documentosRequeridos.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
      e.target.value = "";
    }
  };

  const handleRemoveFile = (index: number) => {
    setDocumentos(prev => prev.filter((_, i) => i !== index));
    setDocumentosNombres(prev => prev.filter((_, i) => i !== index));
    setCurrentIndex(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ documentos });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-ms font-semibold mb-4 text-[#003876]">Documentos / Requisitos</h3>
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {currentIndex < documentosRequeridos.length && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className=" p-3 text-center"
            >
              <div className="mb-4">
                
                    <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                <p className="mt-1 text-sm text-gray-600">Suba el documento: <span className="font-bold">{documentosRequeridos[currentIndex]}</span></p>
                <p className="mt-1 text-xs text-gray-500">PDF, JPG, PNG hasta 10MB</p>
              </div>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                onChange={handleFileChange}
                disabled={currentIndex >= documentosRequeridos.length}
              />
              <label
                htmlFor="file-upload"
                className={`cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#003876] hover:bg-[#002b5c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003876] ${currentIndex >= documentosRequeridos.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {currentIndex < documentosRequeridos.length ? `Seleccionar ${documentosRequeridos[currentIndex]}` : "Todos los documentos subidos"}
              </label>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          key={documentosNombres.length}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Progress
            className="w-full"
            color="secondary" 
            label={`Documentos cargados:   ${documentosNombres.length}/${documentosRequeridos.length}`}
            maxValue={documentosRequeridos.length}
            showValueLabel={false}
            size="sm"
            value={documentosNombres.length}
          />
        </motion.div>
        {documentosNombres.length > 0 && (
          <motion.div
            key={"lista-archivos"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <h4 className="text-sm font-medium text-gray-700 mb-2">Archivos subidos:</h4>
            <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md">
              {documentosNombres.map((nombre, index) => (
                <li key={index} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                    </svg>
                    <span className="ml-2 flex-1 w-0 truncate">{documentosRequeridos[index]}: {nombre}</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="font-medium text-red-600 hover:text-red-500"
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-[#003876] text-white px-4 py-2 rounded hover:bg-[#002b5c] transition-colors"
          disabled={documentosNombres.length !== documentosRequeridos.length}
        >
          Finalizar Trámite
        </button>
      </div>
    </form>
  );
}