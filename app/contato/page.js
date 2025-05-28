"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
    email: z.string().email({ message: 'Email inválido.' }),
    subject: z.string().min(1, { message: 'Por favor selecione um assunto.' }),
    message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres.' }),
  });
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  function onSubmit(values) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success('Mensagem enviada com sucesso!');
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }
  
  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground">
              Tem dúvidas, sugestões ou quer compartilhar sua experiência com
              ervas medicinais? Estamos aqui para ouvir você.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Envie-nos uma Mensagem
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um assunto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="duvida">
                              Dúvida sobre ervas
                            </SelectItem>
                            <SelectItem value="sugestao">
                              Sugestão de conteúdo
                            </SelectItem>
                            <SelectItem value="feedback">
                              Feedback sobre o site
                            </SelectItem>
                            <SelectItem value="parceria">
                              Proposta de parceria
                            </SelectItem>
                            <SelectItem value="outro">Outro assunto</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escreva sua mensagem aqui..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h2>

              <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        contato@ervas-medicinais.com.br
                      </p>
                      <p className="text-muted-foreground">
                        info@ervas-medicinais.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(11) 5555-4444</p>
                      <p className="text-muted-foreground">
                        Segunda a Sexta, 9h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Localização
                      </h3>
                      <p className="text-muted-foreground">
                        Rua das Ervas, 123 - Jardim Botânico
                      </p>
                      <p className="text-muted-foreground">
                        São Paulo, SP - Brasil
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">
                    Horário de Atendimento
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Segunda a Sexta
                      </span>
                      <span>9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados</span>
                      <span>9h às 13h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Domingos e Feriados
                      </span>
                      <span>Fechado</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                      aria-label="YouTube"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15 5-3-5-3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Como posso contribuir com o site?
              </h3>
              <p className="text-muted-foreground">
                Você pode contribuir compartilhando suas experiências, sugerindo
                temas para novos artigos ou enviando informações sobre ervas
                medicinais através do nosso formulário de contato.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Vocês oferecem consultoria sobre uso de ervas medicinais?
              </h3>
              <p className="text-muted-foreground">
                Não oferecemos consultas individuais ou prescrições. Nosso
                conteúdo é informativo e educacional. Para tratamentos
                específicos, recomendamos sempre consultar um profissional de
                saúde qualificado.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Posso republiblicar artigos do site?
              </h3>
              <p className="text-muted-foreground">
                Nossos conteúdos são protegidos por direitos autorais. Para
                republicação, entre em contato conosco solicitando autorização
                específica e citando a fonte original.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Vocês vendem ervas medicinais ou produtos naturais?
              </h3>
              <p className="text-muted-foreground">
                Não comercializamos produtos. Somos um portal informativo
                dedicado a compartilhar conhecimento sobre ervas medicinais e
                seus benefícios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}