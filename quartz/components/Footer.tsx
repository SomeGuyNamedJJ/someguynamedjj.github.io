import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    let re = /\_/gi
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="pill-container">
          {Object.entries(links).map(([text, link]) => (
            <div class="pill-item">
              <a href={link}>{text.replace(re, " ")}</a>
            </div>
          ))}
        </div>
        <div class="flex-container" style="column-gap: 20px; margin-bottom: 12px; margin-top: 8px;">
          <p>© An1nterestingName 2024-2026</p>
          <p>
            Built with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> (© jackyzha0 {year}
            )
          </p>
          <p>
            Hosted on <a href="https://pages.github.com">GitHub Pages</a>
          </p>
          <p>
            Comments (beta) powered by <a href="https://giscus.app">giscus</a>
          </p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
