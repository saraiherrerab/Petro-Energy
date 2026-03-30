import { Award, Users, Globe, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excelencia",
      description: "Comprometidos con los más altos estándares de calidad en todos nuestros productos y servicios"
    },
    {
      icon: Users,
      title: "Integridad",
      description: "Actuamos con transparencia y ética en todas nuestras operaciones empresariales"
    },
    {
      icon: Globe,
      title: "Sostenibilidad",
      description: "Desarrollamos prácticas responsables con el medio ambiente y las comunidades"
    },
    {
      icon: TrendingUp,
      title: "Innovación",
      description: "Invertimos constantemente en tecnología para mejorar nuestros procesos"
    }
  ];

  const stats = [
    { number: "30+", label: "Años de Experiencia" },
    { number: "500+", label: "Clientes Satisfechos" },
    { number: "32", label: "Productos Especializados" },
    { number: "15", label: "Países de Operación" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1712069951097-b37e02e372fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBkcmlsbGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc3NDg5MzA2Nnww&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Nosotros
          </h1>
          <p className="text-xl md:text-2xl">
            Líderes en la Industria Energética
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Nuestra Historia</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Desde 1995, <strong>PetroEnergy</strong> se ha consolidado como uno de los principales 
              proveedores de productos petrolíferos y derivados en la región. Nuestra trayectoria 
              está marcada por un compromiso inquebrantable con la calidad, la innovación y la 
              satisfacción del cliente.
            </p>
            <p>
              Comenzamos como una pequeña distribuidora local y, gracias a la confianza de nuestros 
              clientes y al trabajo dedicado de nuestro equipo, hemos crecido hasta convertirnos en 
              una empresa con presencia internacional, operando en más de 15 países y atendiendo a 
              diversos sectores industriales.
            </p>
            <p>
              Hoy en día, contamos con instalaciones de refinación y almacenamiento de última generación, 
              un equipo de más de 2,000 profesionales altamente capacitados, y una red de distribución 
              que garantiza entregas puntuales y eficientes a todos nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Misión</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Proveer soluciones energéticas de la más alta calidad, garantizando 
                el suministro confiable de productos petrolíferos que impulsen el desarrollo 
                económico de nuestros clientes y contribuyan al progreso de las comunidades 
                donde operamos, siempre con responsabilidad social y ambiental.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">Visión</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser reconocidos como la empresa líder en el sector energético, destacando 
                por nuestra innovación, sostenibilidad y compromiso con la excelencia. 
                Aspiramos a expandir nuestra presencia global mientras mantenemos nuestros 
                valores fundamentales y contribuimos a un futuro energético más limpio y eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section 
        className="relative h-[400px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1687350948803-798aed1f5d7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHN1bnNldHxlbnwxfHx8fDE3NzQ4OTMwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Profesionales comprometidos trabajando cada día para ofrecerte 
              las mejores soluciones energéticas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
