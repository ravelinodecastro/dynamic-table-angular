import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  @Input() tableHeaders: {label: string, key: string}[] = [];
  @Input() list: Array<{[prop: string]: any}> = [];
  @ContentChildren(TemplateRef) cellTemplates: QueryList<TemplateRef<any>> | undefined;
  getCellTemplate(key: string): TemplateRef<any> | null {
    const matchingTemplate = this.cellTemplates?.find(template => {
      let attrs = (template as any)._declarationTContainer.attrs
      return attrs.indexOf('cell') != -1  && attrs[attrs.indexOf('key') + 1] == key
    });
    return matchingTemplate ? matchingTemplate : null;
  }
}
