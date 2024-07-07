---
layout: default
title: "Projects"
permalink: /projects
---
[< Back to Home](home)
# Active Projects
Here is a list of all projects that are currently active:
{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% if tag[0] == "active-project" %}
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    {% endif %}
  </ul>
{% endfor %}
# Inactive Projects
Here is a list of all projects that are no longer active:
{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% if tag[0] == "inactive-project" %}
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    {% endif %}
  </ul>
{% endfor %}
