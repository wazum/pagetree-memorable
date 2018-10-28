define([
    'jquery',
    'TYPO3/CMS/Backend/Storage',
    'TYPO3/CMS/Backend/Viewport'
], function ($, Storage, Backend) {
    'use strict';
    var oldLoaderFinish = Backend.Loader.finish;
    Backend.Loader.finish = function () {
        oldLoaderFinish();
        if (Storage.Persistent.get('BackendComponents.States.Pagetree.stateHash.lastSelectedNode')) {
            var tree = Ext.getCmp('typo3-pagetree-tree');
            if (tree !== undefined) {
                if (!tree.getSelectionModel().getSelectedNode()) {
                    var selectNode = function () {
                        var node = tree.getNodeById(Storage.Persistent.get('BackendComponents.States.Pagetree.stateHash.lastSelectedNode'));
                        if (node) {
                            tree.getSelectionModel().select(node);
                            tree.commandProvider.singleClick(node, tree);
                            tree.getLoader().removeListener('load', selectNode);
                        }
                    };
                    tree.getLoader().addListener('load', selectNode);
                }
            }
        }
    };
});
