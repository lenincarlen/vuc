export interface DatosTramiteFormData {
  extensionTotalTerreno: string;
  areaDesarrolloProyecto: string;
  region: string;
  provincia: string;
  municipio: string;
  sector: string;
  calle: string;
  numero: string;
  latitud: string;
  longitud: string;
  enlaceLocacion: string;
}

export interface DatosTramiteFormProps {
  onSubmit: (data: DatosTramiteFormData) => void;
}