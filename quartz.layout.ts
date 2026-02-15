import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Explorer(), Component.MobileOnly(Component.CustomExplorer())],
  footer: Component.Footer({
    links: {
      All_Pages: "/Explorer",
      Repository: "https://to.1nteresting.name/gh/1nteresting.name",
      Color_Theme: "https://catppuccin.com/",
      Design_Style: "https://neumorphism.io/",
      Stance_on_Generative_AI: "/Stance-on-Generative_AI"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.DesktopOnly(Component.CustomExplorer()),
  ],
  right: [
    Component.DesktopOnly(
      Component.Graph({
        localGraph: {
          linkDistance: 20,
          repelForce: 0.1,
          enableRadial: true,
        },
      }),
    ),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.DesktopOnly(Component.CustomExplorer()),
  ],
  right: [],
}
