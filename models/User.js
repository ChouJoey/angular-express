var db = require('../conf/database');//链接数据库
var User = function() {};

User.prototype.find = function(id, callback) {
	var sql = "SELECT * FROM user WHERE id =?";
	// get a connection from the pool
	db.pool.getConnection(function(err, connection) {
		if(err) {
			callback(true);
			return;
		}
		// make the query
		connection.query(sql, [id], function(err, results) {
			if(err) {
				callback(true);
				return;
			}
			callback(false, results);
		});
	});
};
User.prototype.insert = function(param, callback) {
	var sql = "INSERT INTO user (account,name,sex,password,home) VALUES(?,?,?,?,?)";
	// get a connection from the pool
	db.pool.getConnection(function(err, connection) {
		if(err) {
			callback(true);
			return;
		}
		// make the query
		connection.query(sql, [param.account,param.name,param.sex,param.password,param.home], function(err, results) {
			if(err) {
				callback(true);
				return;
			}
			callback(false, results);
		});
	});
};

module.exports = User;