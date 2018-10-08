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
      holiday_mode:
      markdown_test:
        friendly_name: Markdown Test
        value_template: |
          This is **some text** which is *formatted using* [Markdown](https://en.wikipedia.org/wiki/Markdown)
          This supports
          multiple lines
          > Some quoted text here.
```

!(https://user-images.githubusercontent.com/2099542/46613801-0a70a280-cb0c-11e8-9286-63245b6d1d8b.png)
