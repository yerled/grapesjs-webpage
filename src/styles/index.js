export default (editor, config) => {
  const sm = editor.StyleManager;
  const csm = config.customStyleManager;
  sm.getSectors().reset(
    csm && csm.length
      ? csm
      : [
          {
            name: 'Extra-Squirrel',
            open: false,
            buildProps: ['gap', 'overflow'],
          },
        ],
  );
};
