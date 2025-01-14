import LocalFormContext from "./LocalFormContext"; // this must be placed on top of the .tsx file
import LocalXrm from "./LocalXrm";

export default class GlobalContext {

	public static isWired(): boolean {
		var w = window as any;
		return typeof(w.Xrm) !== 'undefined';
	}

	public static getFormContext(): Xrm.FormContext {
		var w = window as any;
		if (typeof(w._formContext) !== 'undefined') {
			return w._formContext;
		}

		return new LocalFormContext();
	}

	public static getXrm() : Xrm.XrmStatic {
		var w = window as any;
		if (typeof(w.Xrm) !== 'undefined') {
			return w.Xrm;
		}

		return new LocalXrm();
	}
}