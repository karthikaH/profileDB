import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("db.json");

const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ artWorks: [] }).write();

const getArts = () => async (req, res) => {
  try {
    const doc = await db.get("artWorks").value();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const getOneArt = () => async (req, res) => {
  console.log("hi");
  try {
    const doc = await db
      .get("artWorks")
      .find({ id: parseInt(req.params.id) })
      .value();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const updateOneArt = () => async (req, res) => {
  try {
    const doc = await db
      .get("artWorks")
      .find({ id: parseInt(req.params.id) })
      .update("heartCount", n => n + 1)
      .write();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export { getArts, getOneArt, updateOneArt };
