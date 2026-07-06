---
date: 2026-07-06
comments: false
tags:
  - Active-Project
  - Website
---

# About this Project

This is a subdomain of my website set up to shorten URLs related to things I do, such as my YouTube, GitHub, or faster links to projects I think people will visit often.

The site is hosted on Cloudflare Pages, under the domain [to.1nteresting.name](https://to.1nteresting.name). If you go to that site however, you will not see anything, as almost all of the pages use Cloudflare Pages' `_redirects` file, which allows the definition of 2,000 redirects.

This means that if, as an example, you go to [to.1nteresting.name/yt](https://to.1nteresting.name/yt), you get redirected to [youtube.com/channel/UCF4jiwB90xgMadty-ZBlpxg](https://www.youtube.com/channel/UCF4jiwB90xgMadty-ZBlpxg), which is the permanent link for my main YouTube channel. The `<meta>` tags also persist, so any embeds a site will create will also be created with the shortened URL.
