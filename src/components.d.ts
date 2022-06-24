/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AddNote {
        "handleAddNote": (e: any) => void;
    }
    interface HeaderComponent {
    }
    interface NotesComponent {
        "date": any;
        "handleDelete": (id: any) => void;
        "handleEdit": (id: any, text: string) => void;
        "id": string;
        "text": string;
    }
    interface NotesDashboard {
    }
    interface NotesList {
        "handleAddNote": (e: any) => void;
        "handleDelete": (id: any) => void;
        "handleEdit": (id: any, text: string) => void;
        "notes": any;
    }
    interface SearchComponent {
        "handleSearch": (text: any) => any;
    }
}
declare global {
    interface HTMLAddNoteElement extends Components.AddNote, HTMLStencilElement {
    }
    var HTMLAddNoteElement: {
        prototype: HTMLAddNoteElement;
        new (): HTMLAddNoteElement;
    };
    interface HTMLHeaderComponentElement extends Components.HeaderComponent, HTMLStencilElement {
    }
    var HTMLHeaderComponentElement: {
        prototype: HTMLHeaderComponentElement;
        new (): HTMLHeaderComponentElement;
    };
    interface HTMLNotesComponentElement extends Components.NotesComponent, HTMLStencilElement {
    }
    var HTMLNotesComponentElement: {
        prototype: HTMLNotesComponentElement;
        new (): HTMLNotesComponentElement;
    };
    interface HTMLNotesDashboardElement extends Components.NotesDashboard, HTMLStencilElement {
    }
    var HTMLNotesDashboardElement: {
        prototype: HTMLNotesDashboardElement;
        new (): HTMLNotesDashboardElement;
    };
    interface HTMLNotesListElement extends Components.NotesList, HTMLStencilElement {
    }
    var HTMLNotesListElement: {
        prototype: HTMLNotesListElement;
        new (): HTMLNotesListElement;
    };
    interface HTMLSearchComponentElement extends Components.SearchComponent, HTMLStencilElement {
    }
    var HTMLSearchComponentElement: {
        prototype: HTMLSearchComponentElement;
        new (): HTMLSearchComponentElement;
    };
    interface HTMLElementTagNameMap {
        "add-note": HTMLAddNoteElement;
        "header-component": HTMLHeaderComponentElement;
        "notes-component": HTMLNotesComponentElement;
        "notes-dashboard": HTMLNotesDashboardElement;
        "notes-list": HTMLNotesListElement;
        "search-component": HTMLSearchComponentElement;
    }
}
declare namespace LocalJSX {
    interface AddNote {
        "handleAddNote"?: (e: any) => void;
    }
    interface HeaderComponent {
    }
    interface NotesComponent {
        "date"?: any;
        "handleDelete"?: (id: any) => void;
        "handleEdit"?: (id: any, text: string) => void;
        "id"?: string;
        "text"?: string;
    }
    interface NotesDashboard {
    }
    interface NotesList {
        "handleAddNote"?: (e: any) => void;
        "handleDelete"?: (id: any) => void;
        "handleEdit"?: (id: any, text: string) => void;
        "notes"?: any;
    }
    interface SearchComponent {
        "handleSearch"?: (text: any) => any;
    }
    interface IntrinsicElements {
        "add-note": AddNote;
        "header-component": HeaderComponent;
        "notes-component": NotesComponent;
        "notes-dashboard": NotesDashboard;
        "notes-list": NotesList;
        "search-component": SearchComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "add-note": LocalJSX.AddNote & JSXBase.HTMLAttributes<HTMLAddNoteElement>;
            "header-component": LocalJSX.HeaderComponent & JSXBase.HTMLAttributes<HTMLHeaderComponentElement>;
            "notes-component": LocalJSX.NotesComponent & JSXBase.HTMLAttributes<HTMLNotesComponentElement>;
            "notes-dashboard": LocalJSX.NotesDashboard & JSXBase.HTMLAttributes<HTMLNotesDashboardElement>;
            "notes-list": LocalJSX.NotesList & JSXBase.HTMLAttributes<HTMLNotesListElement>;
            "search-component": LocalJSX.SearchComponent & JSXBase.HTMLAttributes<HTMLSearchComponentElement>;
        }
    }
}
