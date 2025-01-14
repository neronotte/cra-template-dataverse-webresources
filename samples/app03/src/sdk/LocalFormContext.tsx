import LocalPageData from "./LocalPageData";
import LocalPageUi from "./LocalPageUi";

export default class LocalFormContext implements Xrm.FormContext
{
    constructor() {
        this.data = new LocalPageData();
        this.ui = new LocalPageUi();
    }

    data: Xrm.Data;
    ui: Xrm.Ui;
    getAttribute(): Xrm.Attributes.Attribute[];
    getAttribute<T extends Xrm.Attributes.Attribute>(attributeName: string): T;
    getAttribute(attributeName: string): Xrm.Attributes.Attribute;
    getAttribute(index: number): Xrm.Attributes.Attribute;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attributes.Attribute>): Xrm.Attributes.Attribute[];
    getAttribute(delegateFunction?: unknown): Xrm.Attributes.Attribute<any> | Xrm.Attributes.Attribute<any>[] {
        throw new Error("Method not implemented.");
    }
    getControl(): Xrm.Controls.Control[];
    getControl<T extends Xrm.Controls.Control>(controlName: string): T;
    getControl(controlName: string): Xrm.Controls.Control;
    getControl<T extends Xrm.Controls.Control>(index: number): T;
    getControl(index: number): Xrm.Controls.Control;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Controls.Control>): Xrm.Controls.Control[];
    getControl(delegateFunction?: unknown): Xrm.Controls.Control | Xrm.Controls.Control[] {
        throw new Error("Method not implemented.");
    }
}