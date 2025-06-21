# Template SaaS Next.js

Este projeto é um template completo para aplicações SaaS (Software as a Service), desenvolvido com [Next.js](https://nextjs.org) e integração pronta com os principais gateways de pagamento: **Stripe** e **Mercado Pago**. O template já vem configurado para autenticação via Google, gerenciamento de usuários no Firebase e envio de e-mails transacionais com Resend.

---

## :rocket: Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (App Router, SSR, API Routes)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Firebase Admin](https://firebase.google.com/docs/admin/setup)** (Firestore para usuários)
- **[NextAuth.js](https://authjs.dev/)** (Autenticação com Google)
- **[Stripe](https://stripe.com/)** (Pagamentos e assinaturas)
- **[Mercado Pago](https://www.mercadopago.com.br/)** (Pagamentos)
- **[Resend](https://resend.com/)** (Envio de e-mails)
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização)
- **[ESLint](https://eslint.org/)** e **[Prettier](https://prettier.io/)** (Qualidade de código)

---

## :gear: Funcionalidades Implementadas

- **Autenticação Social:** Login/logout com Google usando NextAuth e Firebase.
- **Gerenciamento de Usuários:** Usuários salvos e atualizados no Firestore.
- **Checkout Stripe:** Pagamento único e assinatura recorrente, com webhooks para atualização de status e envio de e-mails.
- **Checkout Mercado Pago:** Pagamento via Mercado Pago, com webhooks e validação de assinatura.
- **Envio de E-mails:** Notificações automáticas de sucesso/cancelamento de pagamento usando Resend.
- **Portal do Cliente Stripe:** Link para o usuário gerenciar sua assinatura diretamente pelo portal Stripe.
- **Proteção de Rotas:** Dashboard protegido, redirecionamento automático conforme autenticação.
- **Validação de Webhooks:** Segurança extra nos endpoints de webhook (Stripe e Mercado Pago).
- **Pronto para Deploy:** Estrutura otimizada para deploy na [Vercel](https://vercel.com/).

---

## :computer: Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/template-saas.git
   cd template-saas
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis (exemplo):

   ```
   NEXT_PUBLIC_STRIPE_PUB_KEY=pk_test_xxx
   STRIPE_SECRET_KEY=sk_test_xxx
   STRIPE_WEBHOOK_SECRET=whsec_xxx
   STRIPE_PRODUCT_PRICE_ID=price_xxx
   STRIPE_SUBSCRIPTION_PRICE_ID=price_xxx

   NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY=TEST-xxx
   MERCADO_PAGO_ACCESS_TOKEN=TEST-xxx
   MERCADO_PAGO_WEBHOOK_SECRET=xxx

   FIREBASE_PROJECT_ID=xxx
   FIREBASE_CLIENT_EMAIL=xxx
   FIREBASE_PRIVATE_KEY_BASE64=xxx

   RESEND_API_KEY=re_xxx
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse:** [http://localhost:3000](http://localhost:3000)

---

## :file_folder: Estrutura de Pastas

- `app/` - Rotas, páginas e APIs (Next.js App Router)
  - `(project)/` - Páginas principais (Landing, Login, Dashboard, Pagamentos)
  - `actions/` - Actions server-side (ex: login/logout)
  - `api/` - Rotas de API (Stripe, Mercado Pago, Auth)
  - `hooks/` - Hooks React customizados para Stripe e Mercado Pago
  - `lib/` - Integrações e instâncias de SDKs (Stripe, Firebase, Resend, Mercado Pago)
  - `server/` - Lógica de backend (webhooks, manipulação de pagamentos)
- `public/` - Assets estáticos (ícones, imagens)
- `README.md` - Este arquivo

---

## :lock: Autenticação

- Implementada com [`NextAuth`](app/lib/auth.ts) e [`@auth/firebase-adapter`](https://authjs.dev/reference/adapter/firebase).
- Usuários autenticados são salvos no Firestore.
- Rotas protegidas usando o método [`auth`](app/lib/auth.ts).

---

## :money_with_wings: Pagamentos

### Stripe

- Checkout de pagamento único e assinatura via [`/api/stripe/create-pay-checkout`](app/api/stripe/create-pay-checkout/route.ts) e [`/api/stripe/create-subscription-checkout`](app/api/stripe/create-subscription-checkout/route.ts)
- Webhook para eventos Stripe em [`/api/stripe/webhook`](app/api/stripe/webhook/route.ts)
- Portal do cliente em [`/api/stripe/create-portal`](app/api/stripe/create-portal/route.ts)
- Lógica de manipulação de eventos em [`app/server/stripe/`](app/server/stripe/)

### Mercado Pago

- Checkout via [`/api/mercado-pago/create-checkout`](app/api/mercado-pago/create-checkout/route.ts)
- Webhook para eventos Mercado Pago em [`/api/mercado-pago/webhook`](app/api/mercado-pago/webhook/route.ts)
- Lógica de manipulação de eventos em [`app/server/mercado-pago/`](app/server/mercado-pago/)

---

## :email: Notificações

- Envio de e-mails automáticos via [`Resend`](app/lib/resend.ts) para eventos de pagamento, assinatura e cancelamento.

---

## :shield: Segurança

- Webhooks validados com segredo (Stripe e Mercado Pago).
- Variáveis sensíveis nunca expostas no frontend.
- Rotas protegidas por autenticação.

---

## :wrench: Customização

- Pronto para receber novos métodos de pagamento.
- Fácil de adaptar para outros provedores de autenticação.
- Estrutura modular para escalar features SaaS.

---

## :information_source: Observações

- O template utiliza o padrão de pastas do Next.js App Router.
- O código já está preparado para deploy na Vercel, mas pode ser adaptado para outras plataformas.
- Certifique-se de configurar corretamente as variáveis de ambiente para cada serviço.

---

## :memo: Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e contribuir!

---

## :handshake: Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

---

## :speech_balloon: Contato

Dúvidas, sugestões ou consultoria SaaS? Entre em contato pelo [LinkedIn](https://www.linkedin.com/) ou abra uma issue neste repositório.

---