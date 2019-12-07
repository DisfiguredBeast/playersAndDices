using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LiteDB
{
    public static class LiteCollectionExtensions
    {
        public static async Task<int> CountAsync<T>(this LiteCollection<T> collection)
        {
            return await Task.Run(() => collection.Count());
        }

        public static async Task<int> CountAsync<T>(this LiteCollection<T> collection, Query query)
        {
            return await Task.Run(() => collection.Count(query));
        }

        public static async Task<int> CountAsync<T>(this LiteCollection<T> collection, Expression<Func<T, bool>> predicate)
        {
            return await Task.Run(() => collection.Count(predicate));
        }

        public static async Task<bool> DropIndexAsync<T>(this LiteCollection<T> collection, string field)
        {
            return await Task.Run(() => collection.DropIndex(field));
        }

        public static async Task<long> LongCountAsync<T>(this LiteCollection<T> collection)
        {
            return await Task.Run(() => collection.LongCount());
        }

        public static async Task<long> LongCountAsync<T>(this LiteCollection<T> collection, Query query)
        {
            return await Task.Run(() => collection.LongCount(query));
        }

        public static async Task<long> LongCountAsync<T>(this LiteCollection<T> collection, Expression<Func<T, bool>> predicate)
        {
            return await Task.Run(() => collection.LongCount(predicate));
        }


        public static async Task<bool> ExistsAsync<T>(this LiteCollection<T> collection, Query query)
        {
            return await Task.Run(() => collection.Exists(query));
        }

        public static async Task<bool> ExistsAsync<T>(this LiteCollection<T> collection, Expression<Func<T, bool>> predicate)
        {
            return await Task.Run(() => collection.Exists(predicate));
        }

        public static async Task<BsonValue> MinAsync<T>(this LiteCollection<T> collection, string field)
        {
            return await Task.Run(() => collection.Min(field));
        }

        public static async Task<BsonValue> MinAsync<T>(this LiteCollection<T> collection)
        {
            return await Task.Run(() => collection.Min());
        }

        public static async Task<BsonValue> MinAsync<T,K>(this LiteCollection<T> collection, Expression<Func<T, K>> property)
        {
            return await Task.Run(() => collection.Min(property));
        }

        public static async Task<BsonValue> MaxAsync<T>(this LiteCollection<T> collection, string field)
        {
            return await Task.Run(() => collection.Max(field));
        }

        public static async Task<BsonValue> MaxAsync<T>(this LiteCollection<T> collection)
        {
            return await Task.Run(() => collection.Max());
        }

        public static async Task<BsonValue> MaxAsync<T, K>(this LiteCollection<T> collection, Expression<Func<T, K>> property)
        {
            return await Task.Run(() => collection.Max(property));
        }

        public static async Task<IEnumerable<T>> FindAsync<T>(this LiteCollection<T> collection, Query query, int skip = 0, int limit = int.MaxValue)
        {
            return await Task.Run(() => collection.Find(query, skip, limit));
        }

        public static async Task<IEnumerable<T>> FindAsync<T>(this LiteCollection<T> collection, Expression<Func<T, bool>> predicate, int skip = 0, int limit = int.MaxValue)
        {
            return await Task.Run(() => collection.Find(predicate, skip, limit));
        }

        public static async Task<IEnumerable<T>> FindAllAsync<T>(this LiteCollection<T> collection)
        {
            return await Task.Run(() => collection.FindAll());
        }

        public static async Task<T> FindByIdAsync<T>(this LiteCollection<T> collection, BsonValue id)
        {
            return await Task.Run(() => collection.FindById(id));
        }

        public static async Task<T> FindOneAsync<T>(this LiteCollection<T> collection, Query query)
        {
            return await Task.Run(() => collection.FindOne(query));
        }

        public static async Task<T> FindOneAsync<T>(this LiteCollection<T> collection, Expression<Func<T, bool>> predicate)
        {
            return await Task.Run(() => collection.FindOne(predicate));
        }

        public static async Task<BsonValue> InsertAsync<T>(this LiteCollection<T> collection, T document)
        {
            return await Task.Run(() => collection.Insert(document));
        }

        public static async Task<int> InsertAsync<T>(this LiteCollection<T> collection, IEnumerable<T> docs)
        {
            return await Task.Run(() => collection.Insert(docs));
        }

        public static async Task<bool> UpdateAsync<T>(this LiteCollection<T> collection, T document)
        {
            return await Task.Run(() => collection.Update(document));
        }

        public static async Task<bool> UpdateAsync<T>(this LiteCollection<T> collection, BsonValue id, T document)
        {
            return await Task.Run(() => collection.Update(id, document));
        }

        public static async Task<int> UpdateAsync<T>(this LiteCollection<T> collection, IEnumerable<T> documents)
        {
            return await Task.Run(() => collection.Update(documents));
        }

        public static async Task<int> DeleteAsync<T>(this LiteCollection<T> collection, Query query)
        {
            return await Task.Run(() => collection.Delete(query));
        }

        public static async Task<int> DeleteAsync<T>(this LiteCollection<T> collection, Expression<Func<T, bool>> predicate)
        {
            return await Task.Run(() => collection.Delete(predicate));
        }

        public static async Task<bool> DeleteAsync<T>(this LiteCollection<T> collection, BsonValue id)
        {
            return await Task.Run(() => collection.Delete(id));
        }
    }
}