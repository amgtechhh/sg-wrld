export const site = {
  name: "SG wrld",
  tagline: "Aesthetic Life",
  phoneDisplay: "0806 595 5054",
  phone: "08065955054",
  whatsapp: "2348065955054", // international format, no +
  email: "sgwrld@gmail.com",
  instagram: "https://instagram.com/sgwrld",
  // Search link until the client shares the exact page URL. Replace with https://facebook.com/<page>
  facebook: "https://www.facebook.com/search/top?q=sg%20wrld",
  location: "Nigeria • Nationwide Delivery & Execution",
};

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  badge?: string;
}

export interface ServiceDivision {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  services: ServiceItem[];
}

export const divisions: ServiceDivision[] = [
  {
    id: "design-build",
    code: "01",
    name: "Design, Build & Engineering",
    subtitle: "Architectural Precision & Structural Execution",
    description:
      "From initial CAD blueprints and site plans to turnkey structural construction, solar energy grids, and ongoing facility maintenance.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        id: "arch-drawing",
        title: "Architectural Drawing",
        summary: "Precision site plans, 3D structural visualizations, and municipal-ready engineering blueprints.",
        highlights: ["Site Plans & Layouts", "Structural Blueprints", "3D Renders"],
        badge: "CAD & BIM",
      },
      {
        id: "construction",
        title: "Building Construction",
        summary: "End-to-end residential and commercial construction, structural renovation, and post-build facility care.",
        highlights: ["Turnkey Builds", "Structural Maintenance", "Deep Industrial Cleaning"],
      },
      {
        id: "electrical-solar",
        title: "Electrical & Solar",
        summary: "Hybrid solar installations, inverter banks, industrial wiring, and preventive maintenance across all sections.",
        highlights: ["Hybrid Solar Arrays", "Appliance Supply", "24/7 Grid Maintenance"],
        badge: "Clean Energy",
      },
      {
        id: "plumbing",
        title: "Piping & Plumbing",
        summary: "Pressurized water distribution, borehole reticulation, sanitary fittings, and rapid leak diagnostics.",
        highlights: ["Industrial Piping", "Sanitary Systems", "Routine Maintenance"],
      },
      {
        id: "landscaping",
        title: "Landscaping & Outdoor Design",
        summary: "Curated hardscaping, lush green environments, outdoor ambient lighting, and bespoke exterior styling.",
        highlights: ["Hardscape & Gardens", "Outdoor Styling", "Grounds Care"],
      },
    ],
  },
  {
    id: "materials-fleet",
    code: "02",
    name: "Materials & Automotive Supply",
    subtitle: "Wholesale Grade Depot & Fleet Hardware",
    description:
      "Direct sourcing and site delivery of structural building supplies alongside genuine automotive parts and mechanical restoration.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        id: "building-materials",
        title: "Building Materials Depot",
        summary:
          "Complete structural and finishing inventory: roofing sheets, timber, reinforcement iron, cement, porcelain tiles, sanitary ware, paints, security doors, and bespoke curtains.",
        highlights: ["Iron Bending & Steel", "Roofing, Cement & Tiles", "Doors, Paints & Fittings"],
        badge: "All Types Stocked",
      },
      {
        id: "auto-parts",
        title: "Automobile & Car Parts",
        summary:
          "OEM replacement components, diagnostic maintenance, full mechanical restoration, and performance aesthetic upgrades.",
        highlights: ["Genuine OEM Parts", "Full Restoration", "Performance Upgrades"],
      },
    ],
  },
  {
    id: "property-hospitality",
    code: "03",
    name: "Property, Logistics & Lifestyle",
    subtitle: "Real Estate, Heavy Haulage & Curated Events",
    description:
      "Verified land acquisition, executive apartment rentals, heavy-duty truck charter, 5-star hotel concierge, and luxury interior curation.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        id: "real-estate",
        title: "Land & Real Estate",
        summary: "Verified titled plots, commercial developments, luxury homes, and serviced apartment rentals.",
        highlights: ["Verified Land Sales", "Home & Apartment Leasing", "Property Management"],
        badge: "Verified Titles",
      },
      {
        id: "truck-rental",
        title: "Heavy-Duty Truck Rental",
        summary: "Reliable tippers, flatbeds, and haulage trucks for construction logistics and bulk material transport.",
        highlights: ["Site Haulage", "Flexible Charter", "Maintained Fleet"],
      },
      {
        id: "events-interiors",
        title: "Event Planning & Interior Decoration",
        summary: "Bespoke spatial interior styling and full-scale luxury event production, floral architecture, and decor.",
        highlights: ["Luxury Interiors", "Event Production", "Bespoke Decor"],
      },
      {
        id: "hotel-booking",
        title: "5-Star Hotel Booking",
        summary: "Priority executive reservations and curated hospitality stays at premier 5-star properties.",
        highlights: ["5-Star Suites", "Executive Concierge", "Instant Confirmation"],
      },
    ],
  },
];

export const serviceNames = divisions.flatMap((d) => d.services.map((s) => s.title));

export const metrics = [
  { value: "11+", label: "Integrated Divisions", detail: "Design, supply & lifestyle" },
  { value: "360°", label: "Lifecycle Support", detail: "Blueprint to maintenance" },
  { value: "24/7", label: "Direct Dispatch", detail: "Rapid WhatsApp response" },
  { value: "100%", label: "Aesthetic Standard", detail: "Curated quality assurance" },
];

export const processSteps = [
  {
    step: "01",
    title: "Consult & Scope",
    description: "Share your site location, drawings, material list, or booking brief directly with our coordination desk.",
  },
  {
    step: "02",
    title: "Precision Quote & Plan",
    description: "Receive transparent itemized pricing, architectural specs, or fleet availability tailored to your timeline.",
  },
  {
    step: "03",
    title: "Execute & Maintain",
    description: "Our engineers, suppliers, or hospitality specialists deliver on schedule—backed by ongoing maintenance.",
  },
];
