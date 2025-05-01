
class NoteFactory {
    static createInstance(type) {
        throw new Error("Note type not recognized");
    }
}

module.exports = NoteFactory;