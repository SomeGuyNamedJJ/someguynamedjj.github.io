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
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 5px;">
          {Object.entries(links).map(([text, link]) => (
            <div style="margin-top: 4px; margin-bottom: 4px;">
              <a class="footer-link" href={link}>
                {text.replace("_", " ")}
              </a>
            </div>
          ))}
        </div>
        <p>
          This site was built with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> (©
          jackyzha0 {year}) and is hosted on <a href="https://pages.github.com">GitHub Pages</a>.
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
