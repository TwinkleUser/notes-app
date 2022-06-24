# notes-dashboard



<!-- Auto Generated Below -->


## Events

| Event          | Description | Type                   |
| -------------- | ----------- | ---------------------- |
| `outsideClick` |             | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [header-component](../header-component)
- [search-component](../search-component)
- [notes-list](../notes-list)

### Graph
```mermaid
graph TD;
  notes-dashboard --> header-component
  notes-dashboard --> search-component
  notes-dashboard --> notes-list
  notes-list --> notes-component
  notes-list --> add-note
  style notes-dashboard fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
