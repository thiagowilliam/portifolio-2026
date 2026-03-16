# CLAUDE.md — Padrões do Projeto

## Stack

- **Next.js** (App Router, `src/` dir)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (base de componentes)
- **Biome** (lint + format — substitui ESLint e Prettier)
- **pnpm** (package manager)

---

## Padrões de criação de componentes UI

### Localização

Todos os componentes de UI ficam em `src/components/ui/`.

### Primitivo base

Use sempre `@base-ui/react` como primitivo acessível (já incluído pelo shadcn):

```tsx
import { Button as ButtonPrimitive } from "@base-ui/react/button";
```

### Variantes com `tailwind-variants`

Use **`tailwind-variants`** (`tv`) para definir variantes. **Não use** `class-variance-authority` (cva) nem `twMerge` diretamente — o `tv` já faz o merge de classes automaticamente quando `className` é passado junto com as variantes.

```tsx
import { tv, type VariantProps } from "tailwind-variants";

const component = tv({
  base: ["classes-base-aqui"],
  variants: {
    variant: {
      default: "...",
      outline: "...",
    },
    size: {
      sm: "...",
      default: "...",
      lg: "...",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
```

### Passando `className` — sem `twMerge` explícito

O `tailwind-variants` resolve o merge automaticamente. Passe `className` diretamente na chamada da função de variantes:

```tsx
// ✅ Correto
className={button({ variant, size, className })}

// ❌ Errado — twMerge redundante
className={twMerge(button({ variant, size, className }))}
```

### Tipagem do componente

Combine o tipo do primitivo com `VariantProps`:

```tsx
type ButtonProps = ButtonPrimitive.Props & VariantProps<typeof button>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={button({ variant, size, className })}
      {...props}
    />
  );
}
```

### Exports

Exporte sempre o componente e a função de variantes (útil para composição):

```tsx
export { Button, button as buttonVariants };
```

### Diretiva `"use client"`

Adicione `"use client"` apenas em componentes interativos (que usam hooks, eventos do browser etc).

---

## Configuração de fonte padrão

Use `--default-font-family` no bloco `@theme` do `globals.css` para definir a fonte padrão do projeto. O preflight do Tailwind v4 aplica essa variável automaticamente no `html`/`:host` — **não use classes utilitárias** como `font-sans` no `html` nem `font-[NomeDaFonte]` em componentes.

```css
/* globals.css */
@theme inline {
  --font-sans: var(--font-inter);       /* aponta para a variável do next/font */
  --default-font-family: var(--font-inter); /* preflight aplica globalmente */
}
```

```tsx
/* layout.tsx — registra a fonte via next/font e expõe como variável CSS */
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
```

Nunca use `font-[Inter]`, `font-primary` ou classes de fonte hardcoded em componentes — a fonte padrão já está configurada globalmente.

---

## Design System — Referências do Pencil

O design base vem do arquivo `.pen` em `my-portifolio.pen`. É um portfólio dark-only.

### Cores (CSS custom properties)

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `#34d399` | Verde esmeralda — CTAs, destaques |
| `--primary-foreground` | `#FFFFFF` | Texto sobre fundo primary |
| `--background` | `#0A0F1C` | Fundo principal (navy escuro) |
| `--surface` | `#0F172A` | Fundo de seções alternadas |
| `--card` | `#1E293B` | Superfície de cards |
| `--card-foreground` | `#FFFFFF` | Texto em cards |
| `--muted-foreground` | `#94A3B8` | Texto secundário / descrições |
| `--accent` | `#22D3EE` | Ciano — bordas ghost, destaques |
| `--border` | `rgba(255,255,255,0.05)` | Borda sutil de cards |
| `--ring` | `#34d399` | Anel de foco |

### Tipografia

| Fonte | Variável CSS | Uso | Classe Tailwind |
|---|---|---|---|
| Inter | `--font-inter` | Corpo, títulos, UI geral | padrão (sem classe) |
| JetBrains Mono | `--font-jetbrains-mono` | Badges, labels, stats, código | `font-mono` |

**Não use** `font-sans` explicitamente em componentes — já é o padrão via `--default-font-family`.
**Use** `font-mono` quando precisar de JetBrains Mono (badges, tags, labels de seção).

### Geometria

| Propriedade | Valor |
|---|---|
| Border radius — card | `12px` / `rounded-xl` |
| Border radius — button | `6px` / `rounded-md` |
| Border radius — pill/badge | `16px` / `rounded-full` |
| Border radius — icon wrap | `8px` / `rounded-lg` |
| Padding de seção | `80px 120px` |
| Padding de card body | `24px` / `p-6` |

---

## Página de showcase

Existe uma página de showcase de componentes em `src/app/components/page.tsx`.
Ao criar ou alterar um componente UI, adicione todas as suas variantes nessa página.

---

## Comandos úteis

```bash
pnpm dev          # servidor de desenvolvimento
pnpm build        # build de produção
pnpm lint         # checar problemas (Biome)
pnpm lint:fix     # corrigir automaticamente
pnpm format       # formatar arquivos
```
