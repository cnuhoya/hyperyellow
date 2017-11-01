exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'pink',
    cursorColor: 'pink',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: yellow;
      }
      .tabs_nav .tabs_title {
        color: yellow;
      }
    `
  });
}
