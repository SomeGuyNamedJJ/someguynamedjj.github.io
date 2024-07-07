---
layout: default
title: "Projects"
permalink: /projects
---
[< Back to Home](home)
# Active Projects
Here is a list of all projects that are currently active:
{% for category in site.categories %}
  <ul>
    {% if category[0] == "active-projects" %}
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    {% endif %}
  </ul>
{% endfor %}
# Inactive Projects
Here is a list of all projects that are no longer active:
{% for category in site.categories %}
  <ul>
    {% if category[0] == "inactive-projects" %}
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    {% endif %}
  </ul>
{% endfor %}
