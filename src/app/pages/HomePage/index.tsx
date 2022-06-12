import * as React from 'react';
import ActionItem from './../../components/ActionList/ActionItem';

import { MdFileCopy, MdOutlineSearch } from 'react-icons/md';

export function HomePage() {
  return (
    <>
      <div className="workbench">
        <div className="workbench-app">
          <div className="workbench-wrap">
            <div className="workbench-container">
              <div className="workbench-layout">
                <div className="layout-view">
                  <div className="item-view">
                    <div className="tools-actions-view">
                      <div className="actions-list-wrap">
                        <ul className="actions-list-container vertical">
                          <ActionItem>
                            <MdFileCopy />
                          </ActionItem>
                          <ActionItem>
                            <MdOutlineSearch />
                          </ActionItem>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
