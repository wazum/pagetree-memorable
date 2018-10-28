<?php
declare(strict_types=1);

namespace Wazum\PagetreeMemorable\Hooks\Backend\Template;

use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Core\Utility\VersionNumberUtility;

/**
 * Class DocumentTemplate
 * @package Wazum\PagetreeMemorable\Hooks\Backend\Template
 * @author Wolfgang Klinger <wolfgang@wazum.com>
 */
class DocumentTemplate
{

    /**
     * @param array $parameters
     * @param \TYPO3\CMS\Backend\Template\DocumentTemplate $parent
     * @return void
     */
    public function preHeaderRenderHook(array $parameters, \TYPO3\CMS\Backend\Template\DocumentTemplate $parent)
    {
        /** @var PageRenderer $pageRenderer */
        $pageRenderer = $parameters['pageRenderer'];

        $pageRenderer->loadRequireJsModule('TYPO3/CMS/PagetreeMemorable/PagetreeMemorable');
    }

}
