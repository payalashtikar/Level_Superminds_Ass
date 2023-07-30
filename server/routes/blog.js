const mysql = require('mysql')
const express = require('express')
const mysqlDB = require('../db/connectdb')
const bcrypt = require('bcrypt');
const router = express.Router()

router.post("/createblog", (req, res) => {
    // const {title,content,user_id} = req.body;
    const insertedData = req.body;
    const InsertedRecordData = [insertedData.title, insertedData.content, insertedData.user_id]
    mysqlDB.query("INSERT INTO blog_table (title,content,user_id) VALUES(?)", [InsertedRecordData], (err, rows) => {
        if (err) {
            console.log("error::", err)
        }
        else {
            console.log("Inserted data:", rows)
            // res.send(rows)
            res.json({ message: "Post created successfully" })
        }
    })
})
// ----------------------------------------------------------------------------
router.get("/getalldata", (req, res) => {
    // res.send("hello")
    mysqlDB.query("SELECT * FROM blog_table", (err, rows) => {
        if (err) {
            console.log("error::", err)
        }
        else {
            console.log("all data:", rows)
            res.send(rows)
        }
    })
})
// -----------------------------------------------
router.get("/getsingledata/:id", (req, res) => {
    // res.send("hello")
    mysqlDB.query("SELECT * FROM blog_table WHERE id=?", [req.params.id], (err, rows) => {
        if (err) {
            console.log("error::", err)
        }
        else {
            console.log("single row data:", rows)
            res.send(rows)
        }
    })
})

// ---------------------------------------------------

router.put('/updateblogposts/:id', (req, res) => {
    const { title, content } = req.body;
    const postId = req.params.id;
    const sql = 'UPDATE blog_table SET title=?, content=? WHERE id=?';
    mysqlDB.query(sql, [title, content, postId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to update the blog post.' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Blog post not found.' });
      } else {
        res.json({ message: 'Blog post updated successfully.' });
      }
    });
  });
// ------------------------------------------------

router.delete("/deletesinglerecord/:id", (req, res) => {
    // res.send("hello")
    mysqlDB.query("DELETE FROM blog_table WHERE id=?", [req.params.id], (err, rows) => {
        if (err) {
            console.log("error::", err)
        }
        else {
            console.log("deleted data:", rows)
            res.send(rows)
        }
    })
})

// -------------------------------------------



// Fetch user and their blog posts
router.get('/usersdatawithblog/:id', (req, res) => {
    const userId = req.params.id;
    const sql = `
            SELECT user_table.id AS user_id, user_table.username,
            blog_table.id AS post_id, blog_table.title, blog_table.content
            FROM user_table
            LEFT JOIN blog_table ON user_table.id = blog_table.user_id
            WHERE user_table.id = ?
    `;
    mysqlDB.query(sql, [userId], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch user and blog post data.' });
        } else {
            if (results.length === 0) {
                res.status(404).json({ message: 'User not found.' });
            } else {
                const userWithPosts = {
                    id: results[0].user_id,
                    username: results[0].username,
                    blogPosts: [],
                };

                results.forEach((row) => {
                    if (row.post_id !== null) {
                        userWithPosts.blogPosts.push({
                            id: row.post_id,
                            title: row.title,
                            content: row.content,
                        });
                    }
                });
                res.json({
                    message: "userWithPosts::", userWithPosts


                });
            }
        }
    });
});
module.exports = router;