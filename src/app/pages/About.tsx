import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Users,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: Globe,
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    },
    {
      icon: TrendingUp,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  const stats = [
    { number: "30+", label: t('about.stats.experience') },
    { number: "500+", label: t('about.stats.clients') },
    { number: "32", label: t('about.stats.products') },
    { number: "15", label: t('about.stats.countries') }
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
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">{t('about.ourStory')}</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              {t('about.story1')}
            </p>
            <p>
              {t('about.story2')}
            </p>
            <p>
              {t('about.story3')}
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
        <h2 className="text-4xl font-bold mb-12 text-center">{t('about.ourValues')}</h2>
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
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{t('about.mission')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">{t('about.vision')}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('about.visionText')}
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
              {t('about.ourTeam')}
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {t('about.teamText')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
