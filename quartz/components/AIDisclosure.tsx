import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const AIDisclosure: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`explorer ${displayClass}`}>
        <h3 style="margin: 0px;">No Generative AI was used on this page.</h3>
        <p style="margin: 0px;">This page, or any content discussed on it, was created without the use of Generative AI tools.</p>
        <div class="pill-container" style="margin: auto; margin-bottom: 5px;">
            <div class="pill-item"><a href="/Stance-on-Generative-AI">Stance on Generative AI</a></div>
        </div>
      </div>
    )
  }
  return AIDisclosure
}) satisfies QuartzComponentConstructor
