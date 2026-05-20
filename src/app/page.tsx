import {
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  Hotel,
  PawPrint,
  ReceiptText,
  Smartphone,
  Sparkles,
  Star,
  WashingMachine,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SoapBubbles } from "@/components/soap-bubbles";

const benefits = [
  {
    icon: Clock3,
    title: "Prazo recorde",
    copy: "O hospede sai as 11h, o proximo entra as 15h? Maquinas de grande capacidade resolvem a virada do enxoval a tempo.",
  },
  {
    icon: Sparkles,
    title: "Qualidade de hotelaria",
    copy: "Toalhas felpudas e lencois brancos com selos de qualidade e dosagem automatica de produtos profissionais.",
  },
  {
    icon: ReceiptText,
    title: "Gestao financeira simples",
    copy: "Faturas simplificadas com NIF para lancar as despesas do seu Alojamento Local sem burocracia.",
  },
];

const appAdvantages = [
  "Ativacao das maquinas pelo telemovel",
  "Controlo de gastos por colaborador",
  "Historico de lavagens para acompanhar despesas",
  "Uso recorrente sem depender de moedas",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbfb] text-[#172326]">
      <section className="relative overflow-hidden border-b border-[#d7e5e2] bg-[#102f38]">
        <video
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-lavandaria-al.svg"
          aria-hidden="true"
        >
          <source src="/videos/teaser-lp3.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 hidden bg-cover bg-center lg:block"
          style={{ backgroundImage: "url('/hero-img.webp')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,28,34,0.34),rgba(8,28,34,0.88))] lg:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_58%,rgba(8,28,34,0.88),rgba(8,28,34,0.42)_42%,rgba(8,28,34,0.14)_72%)] lg:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(7,31,38,0.86),rgba(7,31,38,0.56)_42%,rgba(7,31,38,0.18)_72%)] lg:block" />
        <SoapBubbles layer="back" />
        <div className="absolute inset-x-0 top-0 z-10 h-2 bg-[linear-gradient(90deg,#1f8fa4,#f2bf4d,#e46b48)]" />
        <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-7xl items-end gap-12 px-5 pb-10 pt-10 sm:px-8 lg:min-h-[92vh] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10 lg:pb-14">
          <Reveal className="max-w-3xl rounded-lg border border-white/14 bg-[#071f26]/56 p-4 shadow-2xl shadow-black/20 backdrop-blur-[3px] sm:p-6 lg:bg-[#071f26]/48 lg:p-7 lg:backdrop-blur-[4px]">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-lg bg-white/14 text-white ring-1 ring-white/22">
                <WashingMachine className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f2bf4d]">
                  Speed Queen Gambelas
                </p>
                <p className="text-sm text-white/78">
                  Lavandaria parceira para AL
                </p>
              </div>
            </div>

            <Badge className="mb-5 h-7 rounded-lg bg-white/90 px-3 text-[#21535d] ring-1 ring-white/40">
              <Hotel className="size-3.5" aria-hidden="true" />
              Gambelas e arredores
            </Badge>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Check-ins perfeitos exigem enxovais impecaveis. Nao perca tempo
              lavando em casa.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
              A lavandaria parceira do seu Alojamento Local em Gambelas. Lave e
              seque dezenas de lencois e toalhas em menos de 1 hora com
              qualidade de hotel.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-lg bg-[#173f4a] px-5 text-base text-white hover:bg-[#225866]"
              >
                <a href="#contacto">
                  <Hotel className="size-4" aria-hidden="true" />
                  Descobrir condicoes para AL
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-lg border-white/35 bg-white/12 px-5 text-base text-white hover:bg-white/20"
              >
                <a href="#beneficios">Ver vantagens</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-2 text-sm text-white/78 sm:gap-3">
              <div className="rounded-lg border border-white/18 bg-white/12 p-3 backdrop-blur">
                <strong className="block text-2xl text-white">1h</strong>
                lavagem e secagem rapidas
              </div>
              <div className="rounded-lg border border-white/18 bg-white/12 p-3 backdrop-blur">
                <strong className="block text-2xl text-white">5</strong>
                estrelas nos detalhes
              </div>
              <div className="rounded-lg border border-white/18 bg-white/12 p-3 backdrop-blur">
                <strong className="block text-2xl text-white">NIF</strong>
                faturacao para AL
              </div>
            </div>
          </Reveal>

          <Reveal className="relative hidden lg:block" delay={0.12} y={24}>
            <div className="absolute -right-10 top-8 hidden h-40 w-40 rounded-full bg-[#f2bf4d]/25 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-lg border border-white bg-[#173f4a] shadow-2xl shadow-[#244f55]/15">
              <video
                className="aspect-[16/11] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/hero-lavandaria-al.svg"
                aria-label="Video da lavandaria Speed Queen em Gambelas, mostrando maquinas, ambiente e conveniencias"
              >
                <source src="/videos/teaser-lp3.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,47,56,0.02),rgba(16,47,56,0.28))]" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 rounded-lg border border-white/25 bg-white/88 p-3 text-sm font-medium text-[#173f4a] shadow-lg backdrop-blur">
                <CheckCircle2 className="size-4 text-[#1d8a73]" aria-hidden="true" />
                Maquinas de grande capacidade, ambiente cuidado e conveniencias
                para viradas rapidas.
              </div>
            </div>
          </Reveal>
        </div>
        <SoapBubbles layer="front" />
      </section>

      <section id="beneficios" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-3xl">
            <Badge variant="outline" className="rounded-lg border-[#d3dfdd]">
              Reviews 5 estrelas
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-[#102f38] sm:text-5xl">
              O enxoval deixa de ser o gargalo entre check-out e check-in.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <Card className="h-full rounded-lg border-[#d9e5e3] bg-[#fbfdfd] shadow-none transition duration-300 hover:-translate-y-1 hover:border-[#b9d6d2] hover:shadow-xl hover:shadow-[#1d6f7d]/10">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[#e7f4f2] text-[#1d6f7d]">
                      <benefit.icon className="size-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl text-[#173f4a]">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-base leading-7 text-[#557077]">
                    {benefit.copy}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#173f4a] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <Reveal>
            <Badge className="rounded-lg bg-[#f2bf4d] text-[#173f4a]">
              <PawPrint className="size-3.5" aria-hidden="true" />
              Pet Friendly
            </Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-normal sm:text-5xl">
              Um detalhe extra para anuncios que recebem pets.
            </h2>
          </Reveal>
          <Reveal
            className="rounded-lg border border-white/15 bg-white/8 p-6 sm:p-8"
            delay={0.1}
          >
            <p className="text-xl leading-9 text-[#eaf6f4]">
              Seu AL e Pet Friendly? Ofereca mantas limpas para os pets dos seus
              hospedes. Lave-as no nosso Pet Corner exclusivo e nao arrisque
              misturar pelos com o enxoval principal. Um diferencial que gera
              reviews incriveis.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7fbfb] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <Reveal>
            <Badge variant="outline" className="rounded-lg border-[#d3dfdd]">
              Speed Queen App
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-[#102f38] sm:text-5xl">
              A conta do AL funciona para o anfitriao e para a equipa de
              limpeza.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#557077]">
              Controle os gastos e ative maquinas diretamente pelo celular,
              mesmo quando a operacao esta nas maos da funcionaria da limpeza.
            </p>
          </Reveal>

          <div className="grid gap-3">
            {appAdvantages.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="flex items-center gap-3 rounded-lg border border-[#d7e5e2] bg-white p-4 text-[#244a52] shadow-sm transition duration-300 hover:border-[#b9d6d2] hover:shadow-lg hover:shadow-[#1d6f7d]/8">
                  <CheckCircle2
                    className="size-5 text-[#1d8a73]"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <Reveal className="rounded-lg bg-[#f2bf4d] p-6 text-[#173f4a] sm:p-8">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-[#173f4a]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-6 text-2xl font-semibold leading-9">
              &ldquo;Desde que comecei a usar a Speed Queen, a gestao das roupas
              de cama deixou de ser um pesadelo.&rdquo;
            </blockquote>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em]">
              Anfitriao de AL em Gambelas
            </p>
          </Reveal>

          <Reveal
            className="rounded-lg border border-[#d7e5e2] bg-[#fbfdfd] p-6 sm:p-8"
            delay={0.1}
          >
            <div className="flex items-center gap-3 text-[#1d6f7d]">
              <BadgeEuro className="size-5" aria-hidden="true" />
              <p className="font-semibold uppercase tracking-[0.18em]">
                Pacote de boas-vindas
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-[#102f38] sm:text-4xl">
              Garanta condicoes para uso recorrente do seu Alojamento Local.
            </h2>

            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="h-12 rounded-lg border border-[#cbdcda] bg-white px-4 text-base outline-none transition focus:border-[#1d6f7d] focus:ring-4 focus:ring-[#1d6f7d]/10"
                  placeholder="Nome"
                  aria-label="Nome"
                />
                <input
                  className="h-12 rounded-lg border border-[#cbdcda] bg-white px-4 text-base outline-none transition focus:border-[#1d6f7d] focus:ring-4 focus:ring-[#1d6f7d]/10"
                  placeholder="Telemovel ou WhatsApp"
                  aria-label="Telemovel ou WhatsApp"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="h-12 rounded-lg border border-[#cbdcda] bg-white px-4 text-base outline-none transition focus:border-[#1d6f7d] focus:ring-4 focus:ring-[#1d6f7d]/10"
                  placeholder="Nome do AL"
                  aria-label="Nome do Alojamento Local"
                />
                <input
                  className="h-12 rounded-lg border border-[#cbdcda] bg-white px-4 text-base outline-none transition focus:border-[#1d6f7d] focus:ring-4 focus:ring-[#1d6f7d]/10"
                  placeholder="Viradas por semana"
                  aria-label="Viradas por semana"
                />
              </div>
              <textarea
                className="min-h-28 rounded-lg border border-[#cbdcda] bg-white px-4 py-3 text-base outline-none transition focus:border-[#1d6f7d] focus:ring-4 focus:ring-[#1d6f7d]/10"
                placeholder="Quantos jogos de lencois e toalhas costuma lavar por virada?"
                aria-label="Mensagem"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-lg bg-[#173f4a] text-base text-white hover:bg-[#225866]"
              >
                <Smartphone className="size-4" aria-hidden="true" />
                Garantir pacote de boas-vindas
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
