import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
// @ts-ignore
import script from "./scripts/comments.inline"

type Options = {
  provider: "giscus"
  options: {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    themeUrl?: string
    lightTheme?: string
    darkTheme?: string
    mapping?: "url" | "title" | "og:title" | "specific" | "number" | "pathname"
    strict?: boolean
    reactionsEnabled?: boolean
    inputPosition?: "top" | "bottom"
    lang?: string
  }
}

function boolToStringBool(b: boolean): string {
  return b ? "1" : "0"
}

export default ((opts: Options) => {
  const Comments: QuartzComponent = ({ displayClass, fileData, cfg }: QuartzComponentProps) => {
    // check if comments should be displayed according to frontmatter
    const disableComment: boolean =
      typeof fileData.frontmatter?.comments !== "undefined" &&
      (!fileData.frontmatter?.comments || fileData.frontmatter?.comments === "false")
    if (disableComment) {
      return <></>
    }

    return (
      <div>
        <div
          class={classNames(displayClass, "giscus")}
          data-repo={opts.options.repo}
          data-repo-id={opts.options.repoId}
          data-category={opts.options.category}
          data-category-id={opts.options.categoryId}
          data-mapping={opts.options.mapping ?? "url"}
          data-strict={boolToStringBool(opts.options.strict ?? true)}
          data-reactions-enabled={boolToStringBool(opts.options.reactionsEnabled ?? true)}
          data-input-position={opts.options.inputPosition ?? "bottom"}
          data-light-theme={opts.options.lightTheme ?? "light"}
          data-dark-theme={opts.options.darkTheme ?? "dark"}
          data-theme-url={
            opts.options.themeUrl ?? `https://${cfg.baseUrl ?? "example.com"}/static/giscus`
          }
          data-lang={opts.options.lang ?? "en"}
        ></div>
        <blockquote class="callout info" data-callout="info">
          <div class="callout-title">
            <div class="callout-icon"></div>
            <div class="callout-title-inner">
              <p>Comments are experimental. </p>
            </div>
          </div>
          <div class="callout-content">
            <p>
              Comments are currently experimental. Please excuse potential issues that may occur.
            </p>
          </div>
        </blockquote>
      </div>
    )
  }

  Comments.afterDOMLoaded = script

  return Comments
}) satisfies QuartzComponentConstructor<Options>
