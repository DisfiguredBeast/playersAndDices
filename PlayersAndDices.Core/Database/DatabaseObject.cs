using LiteDB;

namespace PlayersAndDices.Core.Database
{
    public abstract class DatabaseObject
    {
        public int Id { get; set; }

        public bool Update()
        {
            var name = GetType().Name;
            var collection = Context.Repository.GetCollection(name);
            var doc = BsonMapper.Global.ToDocument(this);
            return collection.Update(new BsonValue(Id), doc);
        }
    }
}
