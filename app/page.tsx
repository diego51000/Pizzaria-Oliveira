import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Mail, Star, Pizza, Flame, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface MenuItem {
  name: string
  description: string
  price: string
  popular?: boolean
  originalPrice?: string
}

interface MenuCategory {
  category: string
  items: MenuItem[]
}

export default function PizzariaPage() {
  const menuItems: MenuCategory[] = [
    {
      category: "Pizzas Tradicionais",
      items: [
        {
          name: "Marguerita Tamanho Familia",
          description: "Molho de tomate, mussarela, manjericão fresco",
          price: "R$ 42",
          popular: true,
        },
        {
          name: "Pepperoni Tamanho Familia",
          description: "Molho de tomate, mussarela, pepperoni",
          price: "R$ 45",
          popular: true,
        },
        {
          name: "Quatro Estações Tamanho Familia",
          description: "Molho de tomate, mussarela, presunto, cogumelos, alcachofra, azeitonas",
          price: "R$ 55",
        },
        {
          name: "Napolitana Tamanho Familia",
          description: "Molho de tomate, mussarela, anchovas, azeitonas, orégano",
          price: "R$ 40",
        },
      ],
    },
    {
      category: "Pizzas Especiais",
      items: [
        {
          name: "Quatro Queijos Tamanho Familia",
          description: "Molho branco, mussarela, gorgonzola, parmesão, provolone",
          price: "R$ 60",
          popular: true,
        },
        {
          name: "Presunto e Rúcula Tamanho Familia",
          description: "Molho branco, mussarela, prosciutto, rúcula, tomate cereja",
          price: "R$ 65",
        },
        {
          name: "Trufa Negra Tamanho Familia",
          description: "Molho branco, mussarela, cogumelos, trufa negra, rúcula",
          price: "R$ 70",
        },
        {
          name: "Salmão Tamanho Familia",
          description: "Molho branco, cream cheese, salmão defumado, alcaparras, endro",
          price: "R$ 68",
        },
      ],
    },
    {
      category: "Pizzas Doces",
      items: [
        {
          name: "Chocolate com Morango Tamanho Familia",
          description: "Massa doce, chocolate derretido, morangos frescos, açúcar de confeiteiro",
          price: "R$ 48",
          popular: true,
        },
        {
          name: "Banana com Canela Tamanho Familia",
          description: "Massa doce, banana caramelizada, canela, leite condensado, castanhas",
          price: "R$ 45",
          popular: true,
        },
        {
          name: "Romeu e Julieta Tamanho Familia",
          description: "Massa doce, queijo cremoso, goiabada, nozes, mel",
          price: "R$ 50",
        },
        {
          name: "Nutella com Banana Tamanho Familia",
          description: "Massa doce, Nutella, banana fatiada, avelãs trituradas",
          price: "R$ 52",
          popular: true,
        },
        {
          name: "Chocolate Branco com Frutas Vermelhas Tamanho Familia",
          description: "Massa doce, chocolate branco, mix de frutas vermelhas, hortelã",
          price: "R$ 55",
        },
        {
          name: "Doce de Leite com Coco Tamanho Familia",
          description: "Massa doce, doce de leite, coco ralado, amendoim triturado",
          price: "R$ 46",
        },
        {
          name: "Prestígio Tamanho Familia",
          description: "Massa doce, chocolate, coco ralado, leite condensado",
          price: "R$ 49",
        },
        {
          name: "Maçã com Canela Tamanho Familia",
          description: "Massa doce, maçã caramelizada, canela, sorvete de baunilha, calda de caramelo",
          price: "R$ 47",
        },
      ],
    },
    {
      category: "Bebidas",
      items: [
        {
          name: "Coca-Cola 2L",
          description: "Refrigerante de cola tradicional, gelado",
          price: "R$ 12",
          popular: true,
        },
        {
          name: "Coca-Cola Lata 350ml",
          description: "Refrigerante de cola em lata individual",
          price: "R$ 6",
        },
        {
          name: "Guaraná Antarctica 2L",
          description: "Refrigerante de guaraná brasileiro, gelado",
          price: "R$ 10",
          popular: true,
        },
        {
          name: "Guaraná Antarctica Lata 350ml",
          description: "Refrigerante de guaraná em lata individual",
          price: "R$ 5",
        },
        {
          name: "Fanta Laranja 2L",
          description: "Refrigerante sabor laranja, refrescante",
          price: "R$ 10",
        },
        {
          name: "Fanta Laranja Lata 350ml",
          description: "Refrigerante sabor laranja em lata",
          price: "R$ 5",
        },
        {
          name: "Sprite 2L",
          description: "Refrigerante de limão, zero açúcar disponível",
          price: "R$ 10",
        },
        {
          name: "Sprite Lata 350ml",
          description: "Refrigerante de limão em lata individual",
          price: "R$ 5",
        },
      ],
    },
    {
      category: "Sucos Naturais",
      items: [
        {
          name: "Suco de Laranja Natural 500ml",
          description: "Suco de laranja puro, espremido na hora",
          price: "R$ 8",
          popular: true,
        },
        {
          name: "Suco de Limão Natural 500ml",
          description: "Suco de limão fresco com água e açúcar",
          price: "R$ 7",
        },
        {
          name: "Suco de Maracujá Natural 500ml",
          description: "Suco de maracujá cremoso e refrescante",
          price: "R$ 9",
          popular: true,
        },
        {
          name: "Suco de Acerola Natural 500ml",
          description: "Rico em vitamina C, doce e nutritivo",
          price: "R$ 8",
        },
        {
          name: "Suco de Caju Natural 500ml",
          description: "Suco de caju doce e cremoso",
          price: "R$ 9",
        },
        {
          name: "Suco de Goiaba Natural 500ml",
          description: "Suco de goiaba encorpado e saboroso",
          price: "R$ 8",
        },
        {
          name: "Suco Verde Detox 500ml",
          description: "Couve, maçã, limão, gengibre e hortelã",
          price: "R$ 12",
        },
        {
          name: "Suco de Abacaxi com Hortelã 500ml",
          description: "Refrescante combinação tropical",
          price: "R$ 9",
        },
      ],
    },
    {
      category: "Sucos Industrializados & Águas",
      items: [
        {
          name: "Suco Del Valle 1L",
          description: "Sabores: Laranja, Uva, Pêssego, Maracujá",
          price: "R$ 7",
        },
        {
          name: "Suco Del Valle Lata 290ml",
          description: "Diversos sabores disponíveis",
          price: "R$ 4",
        },
        {
          name: "Água Mineral 500ml",
          description: "Água mineral natural gelada",
          price: "R$ 3",
        },
        {
          name: "Água com Gás 500ml",
          description: "Água mineral com gás gelada",
          price: "R$ 4",
        },
        {
          name: "Água Saborizada 500ml",
          description: "Sabores: Limão, Maracujá, Morango",
          price: "R$ 5",
        },
        {
          name: "Chá Gelado Leão 450ml",
          description: "Sabores: Limão, Pêssego, Mate",
          price: "R$ 6",
        },
      ],
    },
    {
      category: "Bebidas Especiais",
      items: [
        {
          name: "Limonada Suíça 500ml",
          description: "Limão, leite condensado e água com gás",
          price: "R$ 10",
          popular: true,
        },
        {
          name: "Caipirinha de Frutas (Sem Álcool) 400ml",
          description: "Sabores: Limão, Morango, Kiwi, Maracujá",
          price: "R$ 12",
        },
        {
          name: "Milkshake 400ml",
          description: "Sabores: Chocolate, Morango, Baunilha, Ovomaltine",
          price: "R$ 14",
          popular: true,
        },
        {
          name: "Smoothie de Frutas 400ml",
          description: "Mix de frutas com iogurte natural",
          price: "R$ 13",
        },
        {
          name: "Café Gelado Especial 300ml",
          description: "Café expresso, leite, açúcar e gelo",
          price: "R$ 8",
        },
        {
          name: "Chocolate Quente 300ml",
          description: "Chocolate cremoso com chantilly",
          price: "R$ 9",
        },
      ],
    },
    {
      category: "Combos Promocionais",
      items: [
        {
          name: "Combo Marguerita + Coca-Cola 2L",
          description: "Pizza Marguerita Tamanho Família + Coca-Cola 2L gelada. Economia de R$ 6!",
          price: "R$ 48",
          popular: true,
          originalPrice: "R$ 54",
        },
        {
          name: "Combo Pepperoni + Guaraná 2L",
          description: "Pizza Pepperoni Tamanho Família + Guaraná Antarctica 2L. Economia de R$ 7!",
          price: "R$ 50",
          popular: true,
          originalPrice: "R$ 55",
        },
        {
          name: "Combo Napolitana + Suco Natural",
          description: "Pizza Napolitana Tamanho Família + Suco de Laranja Natural 500ml",
          price: "R$ 45",
          originalPrice: "R$ 48",
        },
        {
          name: "Combo Quatro Queijos + Limonada Suíça",
          description: "Pizza Quatro Queijos Tamanho Família + Limonada Suíça 500ml. Perfeita combinação!",
          price: "R$ 65",
          popular: true,
          originalPrice: "R$ 70",
        },
        {
          name: "Combo Presunto e Rúcula + Suco Detox",
          description: "Pizza Presunto e Rúcula Tamanho Família + Suco Verde Detox 500ml. Sabor e saúde!",
          price: "R$ 72",
          originalPrice: "R$ 77",
        },
        {
          name: "Combo Salmão + Água Saborizada",
          description: "Pizza Salmão Tamanho Família + Água Saborizada 500ml. Combinação sofisticada!",
          price: "R$ 70",
          originalPrice: "R$ 73",
        },
        {
          name: "Combo Chocolate com Morango + Milkshake",
          description: "Pizza Chocolate com Morango + Milkshake de Morango 400ml. Dupla doçura!",
          price: "R$ 58",
          popular: true,
          originalPrice: "R$ 62",
        },
        {
          name: "Combo Nutella Banana + Chocolate Quente",
          description: "Pizza Nutella com Banana + Chocolate Quente 300ml. Irresistível!",
          price: "R$ 57",
          originalPrice: "R$ 61",
        },
        {
          name: "Combo Romeu e Julieta + Suco de Goiaba",
          description: "Pizza Romeu e Julieta + Suco de Goiaba Natural 500ml. Tradição brasileira!",
          price: "R$ 55",
          originalPrice: "R$ 58",
        },
        {
          name: "Super Combo Família Tradicional",
          description: "2 Pizzas Tradicionais (Marguerita + Pepperoni) + 2 Coca-Cola 2L + 4 Sucos Naturais",
          price: "R$ 125",
          popular: true,
          originalPrice: "R$ 141",
        },
        {
          name: "Super Combo Família Especial",
          description: "2 Pizzas Especiais (Quatro Queijos + Presunto Rúcula) + 2 Guaraná 2L + 4 Limonadas Suíças",
          price: "R$ 165",
          originalPrice: "R$ 185",
        },
        {
          name: "Combo Família Mista",
          description: "1 Pizza Salgada + 1 Pizza Doce + 2 Refrigerantes 2L + 2 Sucos Naturais",
          price: "R$ 135",
          originalPrice: "R$ 150",
        },
        {
          name: "Combo Individual Clássico",
          description: "Fatia de Pizza Marguerita + Refrigerante Lata + Batata Frita Individual",
          price: "R$ 18",
          originalPrice: "R$ 22",
        },
        {
          name: "Combo Individual Especial",
          description: "Fatia de Pizza Especial + Suco Natural 300ml + Salada Individual",
          price: "R$ 22",
          originalPrice: "R$ 26",
        },
        {
          name: "Combo Happy Hour Dupla",
          description: "2 Pizzas Tradicionais + 4 Refrigerantes Lata. Válido das 18h às 20h!",
          price: "R$ 95",
          popular: true,
          originalPrice: "R$ 107",
        },
        {
          name: "Combo Happy Hour Trio",
          description: "3 Pizzas Mistas + 6 Bebidas Variadas. Perfeito para grupos!",
          price: "R$ 180",
          originalPrice: "R$ 205",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Pizza className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-900">Pizzaria Oliveira</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors">
                Início
              </Link>
              <Link href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">
                Cardápio
              </Link>
              <Link href="#sobre" className="text-gray-700 hover:text-red-600 transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="text-gray-700 hover:text-red-600 transition-colors">
                Contato
              </Link>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700">
              <Phone className="h-4 w-4 mr-2" />
              Pedir Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  <Flame className="h-3 w-3 mr-1" />O melhor preço da região e entrega grátis
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  A Melhor Pizza da
                  <span className="text-red-600"> Cidade</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Uma Fatia do Paraíso: Experimente a Verdadeira Pizzaria. Entre em nossa pizzaria e seja imediatamente
                  envolvido pelo aroma inconfundível de massa fresca assando, molho de tomate suculento e queijo
                  derretido borbulhante. Mais do que apenas um lugar para comer, nossa pizzaria é um refúgio acolhedor
                  onde cada fatia conta uma história de paixão pela culinária e tradição.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                  Ver Cardápio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-3"
                >
                  Fazer Reserva
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">4.9 (2.1k avaliações)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Pizza deliciosa da Pizzaria Oliveira"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-red-200 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-orange-200 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Nosso Menu</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pizzas Artesanais</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada pizza é preparada com ingredientes selecionados e massa fermentada por 48 horas
            </p>
          </div>

          <div className="space-y-12">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-2">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            {item.popular && (
                              <Badge className="bg-red-600 hover:bg-red-600">
                                <Heart className="h-3 w-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <span className="text-xl font-bold text-red-600">{item.price}</span>
                            {item.originalPrice && (
                              <div className="text-sm text-gray-500 line-through">{item.originalPrice}</div>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Chef preparando pizza"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">60-80</div>
                  <div className="text-gray-600">tempo de entrega</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Nossa História</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Por Que Abri a Pizzaria Oliveira? Uma História de Paixão e Tradição
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  A decisão de abrir a Pizzaria Oliveira não veio do acaso; foi o resultado de uma vida inteira de amor
                  pela boa comida e, acima de tudo, pela pizza. Desde criança, sempre fui fascinado pela magia de
                  transformar ingredientes simples em algo tão delicioso e reconfortante. As lembranças das reuniões de
                  família em volta da mesa, com o aroma de pizza recém-assada preenchendo a casa, são algumas das minhas
                  mais queridas.
                </p>
                <p>
                  Diego, o Chef de Cozinha: Uma Jornada de Sabores e o Dom da Pizza. A paixão de Diego pela culinária
                  começou cedo, muito antes de ele sonhar em ser chef de cozinha. Cresceu em uma família onde a cozinha
                  era o coração da casa, um lugar de experimentação e celebração. As lembranças dos aromas de manjericão
                  fresco, molho de tomate cozinhando lentamente e pão assando são algumas das suas primeiras e mais
                  vívidas memórias.
                </p>
                <p>
                  Utilizamos apenas ingredientes de boa qualidade e frescos e a massa fermentada naturalmente por 48
                  horas, garantindo o sabor único que nos tornou referência. Não perca tempo, venha aproveitar e
                  degustar nossas deliciosas pizzas.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">50k+</div>
                  <div className="text-gray-600">Pizzas Servidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">4.9</div>
                  <div className="text-gray-600">Avaliação Média</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">25</div>
                  <div className="text-gray-600">Anos de História</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">Entre em Contato</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visite Nossa Pizzaria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para recebê-lo com deliciosas pizzas. Seus filhos, sua esposa, toda a sua família irá
              adorar as pizzas Oliveira, um sabor sem igual para você e toda a sua família.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Rua Antonio Carlos Machado, N° 51
                        <br />
                        Centro, Feira de Santana-Bahia
                        <br />
                        CEP: 44001-567
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                      <p className="text-gray-600">
                        (75) 98362-7873
                        <br />
                        WhatsApp: (75) 98362-7873
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Segunda a Quinta: 18h às 23h</p>
                        <p>Sexta e Sábado: 18h às 00h</p>
                        <p>Domingo: 18h às 22h</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Tem alguma dúvida ou quer fazer uma reserva? Entre em contato conosco!
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Nome</label>
                      <Input placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Telefone</label>
                      <Input placeholder="(75) 99999-9999" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Mensagem</label>
                    <Textarea placeholder="Sua mensagem..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Pizza className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-bold">Pizzaria Oliveira</h3>
              </div>
              <p className="text-gray-400">A Essência da Autêntica Pizzaria: Uma Viagem de Sabores e Tradições.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Cardápio</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#menu" className="hover:text-white transition-colors">
                    Pizzas Tradicionais
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="hover:text-white transition-colors">
                    Pizzas Especiais
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="hover:text-white transition-colors">
                    Pizzas Doces
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="hover:text-white transition-colors">
                    Combos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#sobre" className="hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#sobre" className="hover:text-white transition-colors">
                    Nossa História
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-white transition-colors">
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(75) 98362-7873</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>diegoliveira510@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Rua Antonio Carlos Machado, N° 51 - Centro</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pizzaria Oliveira. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
