export interface Service {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "limpias",
    title: "Limpias espirituales",
    description:
      "Rituales de limpieza energética para liberarte de bloqueos, envidias y malas vibras que no te dejan avanzar.",
  },
  {
    id: "abre-caminos",
    title: "Abre caminos",
    description:
      "Trabajos espirituales para destrabar el amor, el dinero y el trabajo, y abrir las puertas que sientes cerradas.",
  },
  {
    id: "numeros",
    title: "Números de la suerte",
    description:
      "Recibe tus números de la suerte personalizados para loterías, decisiones importantes y momentos clave.",
  },
  {
    id: "virtual",
    title: "Consultas virtuales y presenciales",
    description:
      "Agenda tu consulta por videollamada desde donde estés, o visítame en persona en Miami, Florida.",
  },
];
