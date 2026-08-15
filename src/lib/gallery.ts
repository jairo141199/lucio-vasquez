export interface GalleryItem {
  id: string;
  caption: string;
  /** Ruta en /public/gallery/. Si no se define, se usa un marcador visual. */
  image?: string;
}

export const GALLERY: GalleryItem[] = [
  { id: "item-1", caption: "Tus números de la suerte", image: "/gallery/numeros-suerte.jpg" },
  { id: "item-2", caption: "Rituales de abre caminos", image: "/gallery/portal-magico.jpg" },
  { id: "item-3", caption: "Abundancia y prosperidad", image: "/gallery/abundancia-prosperidad.jpg" },
  { id: "item-4", caption: "Números personalizados para la lotería", image: "/gallery/loteria-trebol.jpg" },
  { id: "item-5", caption: "Consulta virtual por WhatsApp", image: "/gallery/consulta-virtual.jpg" },
  { id: "item-6", caption: "Limpia espiritual presencial", image: "/gallery/consulta-presencial.jpg" },
];
