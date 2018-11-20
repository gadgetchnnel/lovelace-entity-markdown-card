# lovelace-entity-markdown-card
Custom Home Assistant Lovelace card to display Markdown formatted text from an entity state

# Example usage
```
- type: custom:entity-markdown
  title: Markdown Sample
  entity: sensor.markdown_test
```

This uses a template sensor defined like this:

```
sensors:
  - platform: template
    sensors:
      markdown_test:
        friendly_name: Markdown Test
        value_template: |
          This is **some text** which is *formatted using* [Markdown](https://en.wikipedia.org/wiki/Markdown)
          This supports
          multiple lines
          > Some quoted text here.
```

![example](https://user-images.githubusercontent.com/2099542/46614336-7f90a780-cb0d-11e8-8417-6f4f3f1e80e2.png)
